exports.up = function(knex) {
  return knex.schema
    .createTable("contexts", table => {
      table.increments();
      table
        .text("context", 128)
        .notNullable()
        .unique();
    })
    .createTable("actions_contexts", table => {
      table.increments();
      table
        .integer("actions_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("actions")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("contexts_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("contexts")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("actions_contexts")
    .dropTableIfExists("contexts");
};
