const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateId } = require('./middleware');

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await controller.getAllProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id", validateId, (req, res, next) => {
  try {
    res.status(200).json(req.project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
