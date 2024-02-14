const express = require('express');
const router = express.Router();
const controller = require('../controller/login');

router.get('/', controller.axiosPost);

router.post('/resultPost', controller.resultPost);

module.exports = router;
