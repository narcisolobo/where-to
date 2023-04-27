import dbConnect from '@/lib/db-connect';
import Newsletter from '@/models/newsletter-model';

async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const newsletters = await Newsletter.find();
        res.status(200).json(newsletters);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
      break;
    case 'POST':
      try {
        const newsletter = await Newsletter.create(req.body);
        res.status(201).json(newsletter);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
    default:
      const err = { message: `Method ${method} not supported.` };
      console.error(err);
      res.status(400).json(err);
      break;
  }
}

export default handler;
