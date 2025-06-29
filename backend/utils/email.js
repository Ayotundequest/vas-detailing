/**
 * Shared nodemailer transport.
 * @module utils/email
 */
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
});

/**
 * Send email via default transport.
 * @param {object} opts nodemailer message options
 * @returns {Promise}
 */
export function sendMail(opts) {
  return transport.sendMail({
    from: `"VAS Detailing" <no‑reply@vasdetailing.com>`,
    to: process.env.MAIL_TO,
    ...opts
  });
}
