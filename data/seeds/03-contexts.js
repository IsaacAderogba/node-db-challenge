exports.seed = function(knex) {
  return knex("contexts")
    .truncate()
    .then(function() {
      return knex("contexts").insert([
        { context: "home" },
        { context: "work" },
        { context: "computer" }
      ]);
    });
};
