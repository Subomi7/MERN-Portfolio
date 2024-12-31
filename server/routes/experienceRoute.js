import express from "express";
import { allExperience, createExperience } from "../controller/experienceController.js";


const router = express.Router()

router.post("/", createExperience)
router.get("/get-experience", allExperience)

export default router