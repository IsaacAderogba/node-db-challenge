const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateActionId, validateActionBody } = require("./middleware");
const { validateProjectId } = require("../projects/middleware");

router.get("/actions", async (req, res, next) => {
  try {
    const actions = await controller.getActions();
    res.status(200).json(actions);
  } catch (err) {
    next(err);
  }
});

router.get("/actions/:id", validateActionId, (req, res, next) => {
  try {
    res.status(200).json(req.action);
  } catch (err) {
    next(err);
  }
});

router.post("/actions/:id", validateActionBody, validateProjectId, async (req, res, next) => {
  try {
    const newAction = await controller.postAction(req.newAction, req.params.id);
    res.status(201).json(newAction);
  } catch (err) {
    next(err);
  }
})

module.exports = router;
