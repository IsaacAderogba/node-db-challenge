const express = require("express");
const router = express.Router();
const projectsService = require('./projects');

router.get("/api", (req, res, next) => {
  res.status(200).json({ message: "Api is up and running" });
});

router.use("/api", projectsService);

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
