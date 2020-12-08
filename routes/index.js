

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

router.get('/', controller.home);
router.post('/uploadcsv', controller.uploadCsv);
router.get('/display/:id', controller.displayFile);

module.exports = router;