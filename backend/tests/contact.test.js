/**
 * Integration test for /api/contact.
 */
import request from 'supertest';
import app from '../server.js';

describe('POST /api/contact', () => {
  it('responds 200 on success', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ name: 'Test', email: 't@e.com', message: 'Hello' });
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
