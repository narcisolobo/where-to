import dbConnect from '@/lib/db-connect';
import Comment from '@/models/comment-model';
const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);

async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const comments = await Comment.find({ eventId: id });
        res.status(200).json(comments);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
      break;
    case 'POST':
      const emailError = {
        errors: {
          email: {
            message: 'Please enter a valid email.',
          },
        },
      };
      try {
        const { email } = req.body;
        if (!EMAIL_REGEX.test(email)) {
          return res.status(422).json(emailError);
        }
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
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
