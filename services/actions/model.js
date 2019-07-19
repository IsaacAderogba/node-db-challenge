const db = require("../../data/dbConfig");

module.exports = {
  findActions: function() {
    return db("actions");
  },
  findActionById: function(id) {
    return db("actions").where({ id }).first();
  },
  insertAction: function(action) {
    return db("actions")
      .insert(action)
      .then(([id]) => this.findActionById(id));
  }
};
