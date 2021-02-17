const express = require('express');
const router = express.Router();

const awsController = require('./../../controllers/aws');

router.get('/test', awsController.test);

module.exports = router