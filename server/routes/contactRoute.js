import express from 'express';
import { allContact, createContact } from '../controller/contactController.js';

const router = express.Router();

router.post('/', createContact);
router.get('/get-contact', allContact);

export default router;
