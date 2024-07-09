import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { mottoRo, mottoIt } = req.body;

    if (!mottoRo || !mottoIt) {
      return res.status(400).json({ message: 'Motto in both languages is required' });
    }

    const jsonDirectory = path.join(process.cwd(), 'data');
    const newMotto = {
      ro: mottoRo,
      it: mottoIt,
    };

    await fs.writeFile(path.join(jsonDirectory, 'motto.json'), JSON.stringify(newMotto, null, 2));

    res.status(200).json({ message: 'Motto updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
