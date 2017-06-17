exports.up = knex =>
  knex.schema.createTable('subjects', (table) => {
    table.increments('id').primary();
    table.index('id');

    table.timestamps(false, true);

    table.string('name', 100).notNullable();
    table.string('name_slug', 100).notNullable();
  });

exports.down = knex =>
  knex.schema.dropTable('subjects');
