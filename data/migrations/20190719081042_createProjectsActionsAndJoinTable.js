exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.text("name", 128).notNullable();
      table.text("description").notNullable();
      table.boolean("isCompleted").notNullable();
    })
    .createTable("actions", table => {
      table.increments();
      table.text("description").notNullable();
      table.text("notes").notNullable();
      table.boolean("isCompleted").notNullable();
    })
    .createTable("projects_actions", table => {
      table.increments();
      table
        .integer("projects_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("actions_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("actions")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_actions")
    .dropTableIfExists("actions")
    .dropTableIfExists("projects");
};
