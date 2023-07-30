'use client';

import useSWR from 'lib/swr';
import credits from 'lib/credits.json';
import { Collapse } from '@geist-ui/core';

type Libro = { cita: string; dice: string }[];

export default function Page() {
  const [libro, isLoading] = useSWR<Libro>('/api/libro');

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
          {libro.map((lqqd) => (
            <Collapse
              className="!text-lg"
              id={lqqd.cita}
              title={lqqd.cita}
              initialVisible
              key={lqqd.cita}
            >
              {lqqd.dice.split('\n').map((d) => (
                <p key={d}>{d}</p>
              ))}
            </Collapse>
          ))}
        </Collapse.Group>
      )}
    </div>
  );
}
