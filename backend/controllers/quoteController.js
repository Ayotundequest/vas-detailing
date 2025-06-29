/**
 * Logic for quote/booking requests.
 * @module controllers/quoteController
 */
import { sendMail } from '../utils/email.js';

export async function sendQuote(req, res) {
  try {
    await sendMail({
      subject: 'New quote/booking request',
      text: JSON.stringify(req.body, null, 2)
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
