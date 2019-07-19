const db = require('../../data/dbConfig');

module.exports = {
  findProjects: function() {
    return db('projects');
  }
}