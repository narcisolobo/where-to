import dbConnect from '@/lib/db-connect';
import Event from '@/models/event-model';

async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const event = await Event.findById(id);
        res.status(200).json(event);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
      break;
    default:
      const err = { message: `Method ${method} not supported.` };
      console.error(err);
      res.status(400).json(err);
      break;
  }
}

export default handler;
