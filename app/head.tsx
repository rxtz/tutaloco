import credits from 'lib/credits.json';

export default function Head() {
  return (
    <>
      <title>{`${credits.libro} - ${credits.autor}`}</title>
      <meta name="description" content="" />
      <link rel="shortcut icon" href="/favicon.svg" type="image/xml+svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
