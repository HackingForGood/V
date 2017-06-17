exports.up = knex =>
  knex.schema.createTable('subjects', (table) => {
    table.increments('id').primary();
    table.index('id');

    table.timestamps(false, true);

    table.string('name', 500).notNullable();
    table.string('name_slug', 500);
  });

exports.down = knex =>
  knex.schema.dropTable('subjects');
