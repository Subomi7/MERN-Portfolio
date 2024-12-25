import express from "express";
import { createAbout } from "../controller/aboutController.js";

const router = express.Router()

router.post("/", createAbout)

export default router;
