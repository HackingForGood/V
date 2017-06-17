const casual = require('casual');
const moment = require('moment');
const Promise = require('bluebird');
const hash = Promise.promisify(require('bcrypt-nodejs').hash);
const { random } = require('lodash');

const AMT = 200;

exports.seed = async (knex) => {
  const password = await hash('password', null, null);

  await knex('users').truncate();

  const users = [...new Array(AMT)].map(() => ({
    first_name: casual.first_name,
    last_name: casual.last_name,
    email: casual.email,
    base_rate: random(20, 50),
    password,
  }));

  await knex('users').insert(users);
};

