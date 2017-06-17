exports.up = knex =>
  knex.schema.createTable('subjects_users', (table) => {
    table.integer('user_id').unsigned();
    table.integer('subject_id').unsigned();

    table.integer('proficiency').unsigned();
    table.integer('rate').unsigned();

    table.timestamps(false, true);
  });

exports.down = knex =>
  knex.schema.dropTable('subjects_users');
