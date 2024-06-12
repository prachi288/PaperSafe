const express = require('express');

const upload = require('../../middlewares/index');
const { aadhaarCardController } = require('../../controllers/index');

const router = express.Router();

router.post('/uploadAadhaar', upload.single('aadhaar'), aadhaarCardController.uploadAadhaar);
router.get('/downloadAadhaar/:id', aadhaarCardController.downloadAadhaar);

module.exports = router;