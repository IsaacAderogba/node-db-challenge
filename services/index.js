/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const projectsService = require("./projects");
const actionsService = require("./actions");

router.get("/api", (req, res, next) => {
  res.status(200).json({ message: "Api is up and running" });
});

router.use("/api", projectsService);
router.use("/api", actionsService);

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
