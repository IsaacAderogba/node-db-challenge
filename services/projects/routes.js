const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateId, validateBody } = require("./middleware");

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await controller.getAllProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id", validateId, async (req, res, next) => {
  try {
    const actions = await controller.getActionsByProjectId(req.params.id);

    const projectWithActions = {
      ...req.project,
      actions
    };

    res.status(200).json(projectWithActions);
  } catch (err) {
    next(err);
  }
});

router.post("/projects", validateBody, async (req, res, next) => {
  try {
    const newProject = await controller.postProject(req.newProject);
    res.status(201).json(newProject)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
