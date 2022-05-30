import React from 'react';


import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

 
  
  return (
      <>
      <h1>Login page</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, min: 4, pattern: /^\S+@\S+$/i})}/>
      <input type="password" placeholder="Enter password" {...register("Enter password", {required: true})} />

      <input type="submit" />
    </form>

    <h1>Signup page</h1>
   
        <li>
            <Link to="/blogs">Create new  account</Link>
          </li>
    
    
      </>
  );
}


