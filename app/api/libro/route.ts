import { NextResponse as res } from 'next/server';

export async function GET() {
  const data = await fetch('https://grap.vercel.app/api/songs/8737020');

  const html = ((await data.json()).lyrics.html as string)
    .replace('<p>', '')
    .replace('</p>\n\n', '')
    .replace(/<br>\n/g, '\n');

  return res.json(
    html
      .split('\n[')
      .map((lqqd) => ({
        cita: lqqd.split(']')[0],
        dice: lqqd.split(']')[1],
      }))
      .slice(1),
  );
}
