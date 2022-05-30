
const signup = require("../model/signupmodel");



const userLogin = async (req, res, next)=> {
  try {
    const email = req.body.email;
    const password = req.body.password;

  const useremailep = await signup.findOne({useremailid:email})
         
          if(useremailep.userpassword === password){
             res.send(message="your password is correct")
          } else {
            res.send("password not match")
          }
  }

  catch(error) {
    res.status(400).send("invalid Email")
  }
}



 
// Add New product
const userCreatedata = async (req, res, next) => {
  console.log("username", req.body.username);
  console.log("useremailid", req.body.useremailid);
  console.log("userpassword", req.body.userpassword);
  console.log("userconfirmpassword", req.body.userconfirmpassword);
 
 const userinfoget = {
    username: req.body.username,
    useremailid: req.body.useremailid,
    userpassword: req.body.userpassword,
    userconfirmpassword: req.body.userconfirmpassword,       
    };  

    const userData = await signup.create(userinfoget);      
    res.send(userData)      
};
 


 
 
 
module.exports = {
    userCreatedata,
    userLogin
  }
