import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'weeklyschedule.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Legge i dati dal file JSON
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ message: 'Errore durante la lettura del file.' });
    }
  } else if (req.method === 'POST') {
    // Scrive i dati nel file JSON
    const { interval, ...days } = req.body;

    const newData = { interval, ...days };

    try {
      fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
      res.status(200).json({ message: 'Programma settimanale aggiornato!' });
    } catch (error) {
      res.status(500).json({ message: 'Errore durante la scrittura del file.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Metodo ${req.method} non permesso`);
  }
}
