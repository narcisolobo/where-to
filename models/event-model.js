import mongoose, { model, Schema } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
      maxLength: [60, 'Title cannot be more than 60 characters.'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description.'],
      maxLength: [255, 'Description cannot be more than 255 characters'],
    },
    location: {
      type: String,
      required: [true, 'Please provide a location.'],
      maxLength: [60, 'Location cannot be more than 60 characters.'],
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL.'],
      maxLength: [60, 'Image URL cannot be more than 60 characters.'],
    },
    date: {
      type: Date,
      required: [true, 'Please provide an event date.'],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || model('Event', eventSchema);
