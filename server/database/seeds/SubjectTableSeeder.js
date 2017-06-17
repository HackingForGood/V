const casual = require('casual');

const AMT = 200;

exports.seed = async (knex) => {
  await knex('subjects').truncate();

  const subjects = [...new Array(AMT)].map(() => ({
    name: casual.word,
    name_slug: casual.word,
  }));

  await knex('subjects').insert(subjects);
};

