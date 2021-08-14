import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('should get the right responses for each endpoint', () => {
  it('should not get the api endpoint if no query params', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(404);
    done();
  });

  it('should not get the api endpoint if width param less than zero', async (done) => {
    const response = await request.get(
      '/api/?name=fjord&width=-1000&height=1000'
    );
    expect(response.status).toBe(404);
    done();
  });

  it('should not get the api endpoint if height param less than zero', async (done) => {
    const response = await request.get(
      '/api/?name=fjord&width=1000&height=-1000'
    );
    expect(response.status).toBe(404);
    done();
  });

  it('should not get the api endpoint if image name param not valid', async (done) => {
    const response = await request.get(
      '/api/?name=oakland&width=1000&height=-1000'
    );
    expect(response.status).toBe(404);
    done();
  });

  it('should get the image api endpoint if cached', async (done) => {
    const response = await request.get(
      '/api/?name=fjord&width=1000&height=1000'
    );
    expect(response.status).toBe(200);
    done();
  });
});
