const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/projects', (req, res, next) => {
  next(new Error('Error'));
});

module.exports = router;