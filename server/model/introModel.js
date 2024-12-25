import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const introSchema = new Schema(
  {
    welcomeText: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const INTRO = mongoose.model('intro', introSchema);

export default INTRO;
