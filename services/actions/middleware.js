/* eslint-disable require-atomic-updates */
const controller = require("./controllers");

module.exports = {
  validateActionId: async function(req, res, next) {
    const { id } = req.params;
    if (Number.isInteger(parseInt(id, 10))) {
      try {
        const action = await controller.getActionById(id);
        if (action) {
          const context = await controller.getContextsByActionId(id);
          req.action = action;
          req.context = context;
          next();
        } else {
          res
            .status(404)
            .json({ message: `The Action with Id of '${id}' does not exist` });
        }
      } catch (err) {
        next(err);
      }
    } else {
      res.status(400).json({ message: `The Id of '${id}' is not valid` });
    }
  },
  validateActionBody: async function(req, res, next) {
    const { description, notes, isCompleted } = req.body;

    if (
      !description ||
      !notes ||
      (isCompleted !== false && isCompleted !== true)
    )
      res.status(400).json({
        message: "Missing required fields: description, notes, isCompleted"
      });

    req.newAction = { description, notes, isCompleted };
    next();
  }
};
