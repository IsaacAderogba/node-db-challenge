const db = require("../../data/dbConfig");

module.exports = {
  findProjects: function() {
    return db("projects");
  },
  findProjectById: function(id) {
    return db("projects").where({ id });
  }
};
