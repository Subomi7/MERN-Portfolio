import express from 'express';
import { createProject } from '../controller/projectController.js';

const router = express.Router();
router.post('/', createProject);

export default router