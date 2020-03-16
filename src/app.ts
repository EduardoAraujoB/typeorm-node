import 'reflect-metadata';

import './bootstrap';

import express from 'express';

import routes from './routes';

import { databaseConnection } from './database/Connection';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
  }

  public routes(): void {
    this.express.use(routes);
  }

  public async startServer(): Promise<void> {
    this.routes();
    await databaseConnection();
    this.express.listen(process.env.APP_PORT);
  }
}

export default new App();
