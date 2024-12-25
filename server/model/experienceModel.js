import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },   
    company: {
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

const EXPERIENCE = mongoose.model('experience', experienceSchema);

export default EXPERIENCE;
