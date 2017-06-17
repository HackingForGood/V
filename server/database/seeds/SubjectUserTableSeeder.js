const casual = require('casual');
const { random } = require('lodash');

const AMT = 2000;

exports.seed = async (knex) => {
  await knex('subjects_users').truncate();

  const subjects = [...new Array(AMT)].map(() => ({
    subject_id: random(0, 200),
    user_id: random(0, 200),
    proficiency: random(0, 10),
    rate: random(20, 50),
  }));

  await knex('subjects_users').insert(subjects);
};