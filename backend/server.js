/**
 * Main Express entry‑point.
 */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';
import quoteRoute from './routes/quote.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoute);
app.use('/api/quote', quoteRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API ready on :${PORT}`));

export default app; // for tests
