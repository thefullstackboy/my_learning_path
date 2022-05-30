const router = require("express").Router();
const contactMessage = require('../controller/regcontroller');
const formvalidation = require('../validations/signupvalidation');
 
router.post("/signup",formvalidation.ValidationFuncation,contactMessage.userCreatedata);

router.post("/login", contactMessage.userLogin);
 
 
module.exports = router;