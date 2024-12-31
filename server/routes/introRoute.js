import express from 'express'
import { allIntro, createIntro } from '../controller/introController.js'

const router = express.Router()

router.post('/', createIntro)
router.get("/get-intro", allIntro)


export default router;
