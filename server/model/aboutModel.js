import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const aboutSchema = new Schema(
  {
    lottieURL: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ABOUT = mongoose.model('about', aboutSchema);

export default ABOUT;
