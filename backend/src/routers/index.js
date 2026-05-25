const express = require('express');
const router = express.Router();
const rootRouter = require('./root.router');

router.use('/', rootRouter);

module.exports = router;