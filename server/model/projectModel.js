import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    }, 
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const PROJECT = mongoose.model('project', projectsSchema);

export default PROJECT;
