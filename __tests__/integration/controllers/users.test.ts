import { Connection } from 'typeorm';
import request from 'supertest';

import { databaseConnection } from '../../../src/database/Connection';
import app from '../../../src/app';

describe('User', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await databaseConnection();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to list all users', async () => {
    const response = await request(app.express).get('/users');

    expect(response.status).toBe(200);
  });
});
