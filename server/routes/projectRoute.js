import express from 'express';
import { allProject, createProject } from '../controller/projectController.js';

const router = express.Router();

router.post('/', createProject);
router.get("/get-projects", allProject);

export default router;


