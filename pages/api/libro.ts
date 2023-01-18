import { NextApiHandler } from 'next';
import { getLyrics } from 'genius-lyrics-api';

const handler: NextApiHandler = async (req, res) => {
  const libro: string = await getLyrics(
    'https://genius.com/Dr-detarrainsuminisador-libro-tutalocogallo-annotated',
  );

  res.json({
    libro: libro
      .split('\n[')
      .map((lqqd) => ({
        cita: lqqd.split(']')[0],
        dice: lqqd.split(']\n')[1],
      }))
      .slice(1),
  });
};

export default handler;
