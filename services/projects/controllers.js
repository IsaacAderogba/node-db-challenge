const Projects = require('./model');

module.exports = {
  getAllProjects: async function() {
    return Projects.findProjects();
  },
  getProjectById: async function(id) {
    return Projects.findProjectById(id);
  }
}