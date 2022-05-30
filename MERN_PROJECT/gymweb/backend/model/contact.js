const mongoose = require("mongoose");
 
const productSchema = new mongoose.Schema({
  username: String,
  userphone: String,
  usermessage: String, 
});
 
module.exports = mongoose.model("Product", productSchema);