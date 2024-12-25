import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    pronoun: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CONTACT = mongoose.model('contacts', contactSchema);
export default CONTACT;
