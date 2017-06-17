require('dotenv').config();

const knex = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_POST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: {
      max: 1,
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};

module.exports = knex;
