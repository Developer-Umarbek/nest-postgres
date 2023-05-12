import { PG_CONNECTION } from '../constants';
import { Pool } from 'pg';
// const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME, DB_PORT } = process.env;

export const databaseProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    host: 'localhost',
    database: 'dars8',
    password: '1234',
    user: 'postgres',
    port: 5432,
  }),
};
