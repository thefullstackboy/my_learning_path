import './forms.css'

import { useState } from "react";

function Contact() {
  const [username, setName] = useState("");
  const [userphone, setMobileNumber] = useState("");
  const [usermessage, setuserMessage] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/api/contact/contactmessage", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          username: username,
          userphone: userphone,
          usermessage: usermessage,
        }),
      });

      if (res.status === 200) {
        setName("");
        setMobileNumber("");
        setuserMessage("");
        setMessage("Send Message successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App text-center">
      <h1 className='mt-5'>Contact Form</h1>
 <form onSubmit={handleSubmit} autoComplete='off'>
    <div>
      <label>Name</label>
      <input
       type="text"      
       value={username}
       placeholder="Name"
      onChange={(e) => setName(e.target.value)}
      required
      />
    </div>

    <div>
      <label>Contact number</label>
      <input 
       type="text"
       value={userphone}
       placeholder="phone Number"
       onChange={e => setMobileNumber(e.target.value)}
       required
       />
    </div> 

    <div className='row'>
    <label>Your message</label><br/>
      <textarea
         className='ml-3' 
         placeholder='your message'
         name='usermessage'
         value={usermessage}
         rows="4" cols="50"
         onChange={e => setuserMessage(e.target.value)}
         required  
         >          
      </textarea>
    </div>

     
    <div className='abc text-center'>

<button type='submit' className="btn btn-primary btn-lg btn-block">Submit</button> 
<div className="message">{message ? <p>{message}</p> : null}</div>  

</div>




  
 
  </form>
    </div>
  );
}

export default Contact;