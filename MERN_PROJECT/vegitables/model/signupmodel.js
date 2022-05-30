const mongoose = require("mongoose");
 
const signupSchema = new mongoose.Schema({
  username: String,
  useremailid: String,
  userpassword: String,
  userconfirmpassword: String,
});
 
module.exports = mongoose.model("signupdata", signupSchema);