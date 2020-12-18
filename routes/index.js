

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

// routes
router.get('/', controller.home);
router.post('/uploadcsv', controller.uploadCsv);
router.get('/display', controller.displayFile);


// api requests
router.get('/showUploads', controller.showUploads);
router.get('/displayUpload/:id', controller.displayUpload);


module.exports = router;