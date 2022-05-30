const router = require("express").Router();
const contactMessage = require('../controller/contactcontroller');

router.post("/contactmessage", contactMessage.sendMessage);


module.exports = router;