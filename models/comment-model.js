import mongoose, { model, Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email.'],
    },
    name: {
      type: String,
      required: [true, 'Please enter your name.'],
      minLength: [2, 'Name must be at least two characters.'],
    },
    body: {
      type: String,
      required: [true, 'Please enter your comment.'],
      minLength: [5, 'Comment must be at least five characters.'],
      maxLength: [255, 'Comments cannot exceed 255 characters.'],
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Comment || model('Comment', commentSchema);
