import express from 'express';
import { connect } from './db/db.js';
import dotenv from 'dotenv';
import introRoute from './routes/introRoute.js';
import aboutRoute from './routes/aboutRoute.js';
import experienceRoute from './routes/experienceRoute.js';
import projectRoute from './routes/projectRoute.js';
import contactRoute from './routes/contactRoute.js';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use('/api/intro', introRoute);
app.use('/api/about', aboutRoute);
app.use('/api/experience', experienceRoute);
app.use('/api/projects', projectRoute);
app.use('/api/contact', contactRoute);

app.get('/', function (req, res) {
  res.status(200).json({ success: true, message: 'server is live' });
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`http://localhost:${port}`);
      });
    } catch (error) {
      console.log('cannot connect to server' + error.message);
    }
  })
  .catch((error) => {
    console.log('invalid database connection' + error.message);
  });
