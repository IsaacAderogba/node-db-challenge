/* eslint-disable require-atomic-updates */
const controller = require("./controllers");

module.exports = {
  validateId: async function(req, res, next) {
    const { id } = req.params;
    if (Number.isInteger(parseInt(id, 10))) {
      try {
        const project = await controller.getProjectById(id);
        if (project) {
          req.project = project;
          next();
        } else {
          res
            .status(404)
            .json({ message: `The Project with Id of '${id}' does not exist` });
        }
      } catch (err) {
        next(err);
      }
    } else {
      res.status(400).json({ message: `The Id of '${id}' is not valid` });
    }
  },
  validateBody: function(req, res, next) {
    const { name, description, isCompleted } = req.body;


    if (!name || !description || ( isCompleted !== false && isCompleted !== true))
      res.status(400).json({
        message: "Missing required fields: name, description, isCompleted"
      });

    req.newProject = { name, description, isCompleted };
    next();
  }
};
