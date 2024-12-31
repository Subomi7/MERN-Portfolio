import express from 'express';
import { allAbout, createAbout } from '../controller/aboutController.js';

const router = express.Router();

router.post('/', createAbout);
router.get('/get-about', allAbout);

export default router;
