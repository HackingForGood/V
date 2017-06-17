exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.index('id');

    table.timestamps(false, true);

    table.string('email', 100).notNullable();
    table.string('password', 60);

    table.string('first_name', 100);
    table.string('last_name', 100);

    table.integer('base_rate').unsigned();
  });

exports.down = knex =>
  knex.schema.dropTable('users');
