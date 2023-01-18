'use client';

import useSWR from 'lib/swr';
import credits from 'lib/credits.json';
import { Collapse } from '@geist-ui/core';

export default function Page() {
  const [data, isLoading] = useSWR('/api/libro') as [
    { libro: { cita: string; dice: string }[] },
    boolean,
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 font-expanded">
        <h1 className="text-4xl text-drip">
          <a href={credits.genius}>{credits.libro}</a>
        </h1>
        <h2 className="text-2xl text-neutral-400">
          <a href={credits.tiktok}>{credits.autor}</a>
        </h2>
      </div>

      {!isLoading && (
        <Collapse.Group accordion={false}>
          {data.libro.map((lqqd, i) => (
            <Collapse id={lqqd.cita} title={lqqd.cita} initialVisible key={i}>
              {lqqd.dice.split('\n').map((d, i) => (
                <p className="text-lg" key={i}>
                  {d}
                </p>
              ))}
            </Collapse>
          ))}
        </Collapse.Group>
      )}
    </div>
  );
}
