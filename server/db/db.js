import mongoose from 'mongoose';

export const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: 'subby-portfolio',
    });
    console.log('mongoDB connected successful');
  } catch (error) {
    console.log(error.message);
  }
};
