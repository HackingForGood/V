const casual = require('casual');
const { random } = require('lodash');

const AMT = 2000;

exports.seed = async (knex) => {
  await knex('feedback').truncate();

  const feedback = [...new Array(AMT)].map(() => ({
    tutor_id: random(0, 200),
    author_id: random(0, 200),
    subject_id: random(0, 230),
    rating: random(0, 10),
    body: casual.sentences(3),
  }));

  await knex('feedback').insert(feedback);
};