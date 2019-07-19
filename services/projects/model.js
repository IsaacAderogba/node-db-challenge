const db = require("../../data/dbConfig");

module.exports = {
  findProjects: function() {
    return db("projects");
  },
  findProjectById: function(id) {
    return db("projects")
      .where({ id })
      .first();
  },
  findActionsByProjectId: function(id) {
    return db
      .select(
        "actions.id",
        "actions.description",
        "actions.notes",
        "actions.isCompleted"
      )
      .from("actions")
      .join("projects", "actions.projects_id", "projects.id")
      .where({ "projects.id": id });
  },
  insertProject: function(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => this.findProjectById(id));
  }
};
