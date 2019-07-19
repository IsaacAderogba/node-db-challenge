const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});

router.use((err, req, res) => {
  res.status(500).json({ message: err.nessage, stack: err.stack });
});

module.exports = router;
