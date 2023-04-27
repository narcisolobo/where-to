import dbConnect from '@/lib/db-connect';
import Event from '@/models/event-model';

async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;
  const year = +slug[0];
  const month = +slug[1];

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        if (
          isNaN(year) ||
          isNaN(month) ||
          year < 2021 ||
          year > 2030 ||
          month < 1 ||
          month > 12
        ) {
          throw new Error('Invalid filter data.');
        }
        const filteredEvents = await Event.find({
          $and: [
            { $expr: { $eq: [{ $year: '$date' }, year] } },
            { $expr: { $eq: [{ $month: '$date' }, month] } },
          ],
        });
        res.status(200).json(filteredEvents);
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
