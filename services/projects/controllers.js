const Projects = require('./model');

module.exports = {
  getAllProjects: async function() {
    return Projects.findProjects();
  }
}