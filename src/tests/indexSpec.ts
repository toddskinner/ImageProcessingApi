import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test the initial endpoint', () => {
  it('should get the right responses for the initial endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});
