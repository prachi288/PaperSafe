const express = require('express');

const { apiV1AadhaarRoutes } = require('./v1/index');

const router = express.Router();

router.use('/v1', apiV1AadhaarRoutes);

module.exports = router;