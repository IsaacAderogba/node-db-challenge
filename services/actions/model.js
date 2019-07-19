const db = require("../../data/dbConfig");

module.exports = {
  findActions: function() {
    return db("actions");
  },
  findActionById: function(id) {
    return db("actions")
      .where({ id })
      .first();
  },
  findContextsByAction: function(id) {
    return db
      .select("context")
      .from("actions_contexts")
      .join("actions", "actions.id", "actions_contexts.actions_id")
      .join("contexts", "contexts.id", "actions_contexts.contexts_id")
      .where({ "actions.id": id });

    /*
      SELECT
  context,
  actions.description
  FROM actions_contexts
  JOIN actions
  ON actions.id = actions_contexts.actions_id
  JOIN contexts
  ON contexts.id = actions_contexts.contexts_id
  WHERE actions.id = 23
    */
  },
  insertAction: function(action) {
    return db("actions")
      .insert(action)
      .then(([id]) => this.findActionById(id));
  }
};
