import { createConnection, Connection } from 'typeorm';
import { User } from '../app/entities/user.entity';

import '../bootstrap';

export async function databaseConnection(): Promise<Connection> {
  const connection = await createConnection({
    type: process.env.NODE_ENV !== 'test' ? 'postgres' : 'sqlite',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: true,
    logging: false,
  });

  return connection;
}
