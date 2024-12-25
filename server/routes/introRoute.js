import express from 'express'
import { createIntro } from '../controller/introController.js'

const router = express.Router()

router.post('/', createIntro)


export default router;
