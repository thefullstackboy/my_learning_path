import React from 'react';
import { useForm } from 'react-hook-form';

const Blogs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   
    if(onSubmit === Array) {
        
    }
    console.log(errors);
    return (<>
                  <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <input type="text" placeholder="Full Name" {...register("Full Name", {required: true})} /><br/>
      <input type="text" placeholder="User Name" {...register("User Name", {required: true, min: 4})} /><br/>
      <input type="email" placeholder="Email id" {...register("Email id", {required: true, min: 4})} /><br/>
      <input type="text" placeholder="Mobile" {...register("Mobile", {required: true})} /><br/>
      <input type="password" placeholder="Password" {...register("Password", {required: true})} /><br/>

      <input type="submit" />
      <input type="reset" /> 
    </form>
                  </>
    )   
  };
  
  export default Blogs;