import dbConnect from '@/lib/db-connect';
import Event from '@/models/event-model';

async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const featuredEvents = await Event.find({ isFeatured: true });
        res.status(200).json(featuredEvents);
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
