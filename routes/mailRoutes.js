
const { sendMailController, receiveMail,getMailController } = require('../controller/mainController.js');
const express = require('express');

const router = express.Router();

router.post('/send-mail', sendMailController);
router.post('/send-message', receiveMail);
router.get('/get-all-mails',getMailController)

module.exports = router;
