exports.up = knex =>
  knex.schema.createTable('feedback', (table) => {
    table.increments('id').primary();
    // users
    table.integer('author_id').unsigned();
    table.integer('tutor_id').unsigned();

    table.integer('subject_id').unsigned();

    table.string('body').unsigned();

    table.integer('rating').unsigned();

    table.timestamps(false, true);
  });

exports.down = knex =>
  knex.schema.dropTable('feedback');
