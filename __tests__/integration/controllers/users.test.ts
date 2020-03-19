import { Connection } from 'typeorm';
import request from 'supertest';

import { databaseConnection } from '../../../src/database/Connection';
import app from '../../../src/app';

import truncate from '../../util/truncate';
import factory from '../../factories';

describe('User', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await databaseConnection();
  });

  beforeEach(async () => {
    await truncate(connection);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to list all users', async () => {
    const response = await request(app.express).get('/users');

    expect(response.status).toBe(200);
  });

  it('should be able to store a new user', async () => {
    const user: object = await factory.attrs('User');

    const response = await request(app.express)
      .post('/users')
      .send(user);

    expect(response.status).toBe(200);
  });
});
