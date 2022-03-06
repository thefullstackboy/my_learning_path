// import React from 'react'

// export default function Admission () {
//   return (
//       <>
//       <div className='container'>
//           <div className='row'>
//               <div className='mx-auto'>
//                   <div className='text-center'>
//                       <h1>School Admission Form</h1>
// <form>
//         <div className="form-group mt-5">
//             <label htmlFor="exampleFormControlInput1" className='float-left'>Sudent Name</label>
//             <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>

//                       <label htmlFor="exampleFormControlInput1">Father Name</label>
//             <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
//         </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleFormControlSelect1">Example select</label>
//                     <select className="form-control" id="exampleFormControlSelect1">
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4</option>
//                     <option>5</option>
//                     </select>
//                 </div>

//         <div class="form-group">
//                 <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
//                 <select multiple className="form-control" id="exampleFormControlSelect2">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 </select>
//         </div>

//         <div className="form-group">
//             <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
//             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
// </form>

//                   </div>
//               </div>
//           </div>
//       </div>
//       </>
//   ) 
// }

import React from "react";
import { useForm } from "react-hook-form";

export default function Admission() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
  
        <input {...register("Developer", { required: true })} type="radio" value="Yes" />
        <input {...register("Developer", { required: true })} type="radio" value="No" />
  
        <input type="submit" />
      </form>
    );
  }