const Actions = require('./model');

module.exports = {
  getActions: async function() {
    return await Actions.findActions();
  },
  getActionById: async function(id) {
    return await Actions.findActionById(id);
  },
  postAction: async function(action, id) {
    return await Actions.insertAction({...action, projects_id: id});
  }
}