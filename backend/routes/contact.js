/**
 * Contact routes.
 * @module routes/contact
 */
import { Router } from 'express';
import { sendContact } from '../controllers/contactController.js';
const router = Router();
router.post('/', sendContact);
export default router;
