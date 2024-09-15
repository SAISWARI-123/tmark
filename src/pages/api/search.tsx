import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { q } = req.query;
    if (q) {
      // Mock search logic
      const results = [
        { id: 1, name: "nike", owner: "Nike", law_firm: "Law Firm 1" },
        { id: 2, name: "Tesla", owner: "Tesla", law_firm: "Law Firm 2" }
      ];

      const filteredResults = results.filter(item =>
        item.name.toLowerCase().includes((q as string).toLowerCase())
      );

      return res.status(200).json({ results: filteredResults });
    } else {
      return res.status(400).json({ error: "Missing query parameter" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
