const Product = require("../model/contact");

// Add New product
const sendMessage = async (req, res) => {
  console.log("username", req.body.username);
  console.log("userphone", req.body.userphone);
  console.log("usermessage", req.body.usermessage);
  
 const product = {
    username: req.body.username,
    userphone: req.body.userphone,
    usermessage: req.body.usermessage,    
    };  

    const userData = await Product.create(product);
    res.send(userData)
};




module.exports = {
    sendMessage
  }
