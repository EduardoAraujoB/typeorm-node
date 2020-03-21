import { Connection } from 'typeorm';
import request from 'supertest';

import { databaseConnection } from '../../../src/database/Connection';
import app from '../../../src/app';

import truncate from '../../util/truncate';
import factory from '../../factories';
import UserInterface from '../../interface/User';

describe('Session', () => {
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

  it('should return an error with a invalid request schema', async () => {
    const response = await request(app.express)
      .post('/sessions')
      .send({ email: 'mail' });

    expect(response.status).toBe(400);
  });

  it('should return an error with an invalid user', async () => {
    const response = await request(app.express)
      .post('/sessions')
      .send({ email: 'example@mail.com', password: 'password' });

    expect(response.status).toBe(401);
  });

  it('should return an error with an invalid password', async () => {
    const user: UserInterface = await factory.attrs('User');

    await request(app.express)
      .post('/users')
      .send(user);

    const response = await request(app.express)
      .post('/sessions')
      .send({ email: user.email, password: `${user.password}a` });

    expect(response.status).toBe(401);
  });

  it('should be able to authenticate a user', async () => {
    const user: UserInterface = await factory.attrs('User');

    await request(app.express)
      .post('/users')
      .send(user);

    const response = await request(app.express)
      .post('/sessions')
      .send({ email: user.email, password: user.password });

    expect(response.status).toBe(200);
  });
});
