const joi = require('joi');
const errors = require('restify-errors');
 
const ValidationFuncation = (req,res,next) => {
 
   const schema = joi. object().keys({
    username: joi.string().min(4).max(16).required(),
    useremailid: joi.string().email().required(),
    userpassword: joi.string().pattern(new RegExp('^[a-z]')),
    userconfirmpassword: joi.ref('userpassword')
   });
 
  // schema options
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

//from where to get the data
const body = req.body;

//validate the data
const { error, value } = schema.validate(body, options);
   
   
      
    if (error) {
        // on fail return comma separated errors
        console.log("\n\n\n\n\ I am in error part \n\n\n\n")
       
        res.send(JSON.stringify({errorMessage:error}));
       // next();
    } else {
        req.body = value;
        next();
    }   

 
}

module.exports ={
    ValidationFuncation
}
