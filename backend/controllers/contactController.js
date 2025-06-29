/**
 * Logic for contact‑form delivery.
 * @module controllers/contactController
 */
import { sendMail } from '../utils/email.js';

/**
 * POST /api/contact
 */
export async function sendContact(req, res) {
  try {
    const { name, email, message } = req.body;
    await sendMail({
      subject: 'New contact message',
      text: `${name} <${email}> says:\n${message}`
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
