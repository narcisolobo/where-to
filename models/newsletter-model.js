import mongoose, { model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);

const newsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email.'],
      unique: true,
      validate: {
        validator: (email) => EMAIL_REGEX.test(email),
        message: 'Please enter a valid email.',
      },
    },
  },
  { timestamps: true }
);

newsletterSchema.plugin(mongooseUniqueValidator, {
  message: 'Email already exists.',
});

export default mongoose.models.Newsletter ||
  model('Newsletter', newsletterSchema);
