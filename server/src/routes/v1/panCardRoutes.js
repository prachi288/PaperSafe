const express = require('express');

const upload = require('../../middlewares/index');
const { panCardController } = require('../../controllers/index');

const router = express.Router();

router.post('/uploadPAN', upload.single('pan'), panCardController.uploadPAN);
router.get('/downloadPAN/:id', panCardController.downloadPAN);

module.exports = router;