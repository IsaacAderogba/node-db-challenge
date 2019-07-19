const db = require("../../data/dbConfig");

module.exports = {
  findActions: function() {
    return db("actions");
  },
  findActionById: function(id) {
    return db("actions").where({id});
  },
  insertActionByProjectId: function() {}
};
