import express from "express";
import { createExperience } from "../controller/experienceController.js";


const router = express.Router()

router.post("/", createExperience)

export default router