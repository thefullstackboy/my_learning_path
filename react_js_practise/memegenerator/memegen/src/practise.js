// // import React from "react"

// // export default function Form() {
// //     const [firstName, setFirstName] = React.useState("")
    
// //     console.log(firstName)
    
// //     function handleChange(event) {
// //         setFirstName(event.target.value)
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //             />
// //         </form>
// //     )
// // }


// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {firstName: "", lastName: ""}
// //     )
    
// //     console.log(formData)
    
// //     function handleChange(event) {
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [event.target.name]: event.target.value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //             />
// //         </form>
// //     )
// // }

// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {firstName: "", lastName: "", email: ""}
// //     )
    
// //     /**
// //      * Challenge: add an email field/state to the form
// //      */
    
// //     console.log(formData)
    
// //     function handleChange(event) {
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [event.target.name]: event.target.value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //             />
// //         </form>
// //     )
// // }



// //controll methode
// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {firstName: "", lastName: "", email: "",  comments: ""}
// //     )
    
// //     function handleChange(event) {
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [event.target.name]: event.target.value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //                 value={formData.firstName}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //                 value={formData.lastName}
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //                 value={formData.email}
// //             />

// // <textarea
// //                value={formData.comments}
// //                placeholder="Comments"
// //                onChange={handleChange}
// //                name="comments"
// //            />

// //         </form>
// //     )
// // }

// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {
// //             firstName: "", 
// //             lastName: "", 
// //             email: "", 
// //             comments: "", 
// //             isFriendly: true
// //         }
// //     )
    
// //     function handleChange(event) {
// //         const {name, value, type, checked} = event.target
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [name]: type === "checkbox" ? checked : value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //                 value={formData.firstName}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //                 value={formData.lastName}
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //                 value={formData.email}
// //             />
// //             <textarea 
// //                 value={formData.comments}
// //                 placeholder="Comments"
// //                 onChange={handleChange}
// //                 name="comments"
// //             />
// //             <input 
// //                 type="checkbox" 
// //                 id="isFriendly" 
// //                 checked={formData.isFriendly}
// //                 onChange={handleChange}
// //                 name="isFriendly"
// //             />
// //             <label htmlFor="isFriendly">Are you friendly?</label>
// //             <br />
// //             <br />

// //             <fieldset>
// //                 <legend>Current employment status</legend>
                
// //                 <input 
// //                     type="radio"
// //                     id="unemployed"
// //                     name="employment"
// //                     value="unemployed"
// //                     checked={formData.employment === "unemployed"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="unemployed">Unemployed</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="part-time"
// //                     name="employment"
// //                     value="part-time"
// //                     checked={formData.employment === "part-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="part-time">Part-time</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="full-time"
// //                     name="employment"
// //                     value="full-time"
// //                     checked={formData.employment === "full-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="full-time">Full-time</label>
// //                 <br />
                
// //             </fieldset>
// //         </form>
// //     )
// // }


// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {
// //             firstName: "", 
// //             lastName: "", 
// //             email: "", 
// //             comments: "", 
// //             isFriendly: true,
// //             employment: ""
// //         }
// //     )
// //     console.log(formData.employment)
    
// //     function handleChange(event) {
// //         const {name, value, type, checked} = event.target
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [name]: type === "checkbox" ? checked : value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //                 value={formData.firstName}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //                 value={formData.lastName}
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //                 value={formData.email}
// //             />
// //             <textarea 
// //                 value={formData.comments}
// //                 placeholder="Comments"
// //                 onChange={handleChange}
// //                 name="comments"
// //             />
// //             <input 
// //                 type="checkbox" 
// //                 id="isFriendly" 
// //                 checked={formData.isFriendly}
// //                 onChange={handleChange}
// //                 name="isFriendly"
// //             />
// //             <label htmlFor="isFriendly">Are you friendly?</label>
// //             <br />
// //             <br />
            
// //             <fieldset>
// //                 <legend>Current employment status</legend>
                
// //                 <input 
// //                     type="radio"
// //                     id="unemployed"
// //                     name="employment"
// //                     value="unemployed"
// //                     checked={formData.employment === "unemployed"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="unemployed">Unemployed</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="part-time"
// //                     name="employment"
// //                     value="part-time"
// //                     checked={formData.employment === "part-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="part-time">Part-time</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="full-time"
// //                     name="employment"
// //                     value="full-time"
// //                     checked={formData.employment === "full-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="full-time">Full-time</label>
// //                 <br />
                
// //             </fieldset>
// //         </form>
// //     )
// // }





// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {
// //             firstName: "", 
// //             lastName: "", 
// //             email: "", 
// //             comments: "", 
// //             isFriendly: true,
// //             employment: "",
// //             favColor: ""
// //         }
// //     )
// //     console.log(formData.favColor)
    
// //     function handleChange(event) {
// //         console.log(event)
// //         const {name, value, type, checked} = event.target
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [name]: type === "checkbox" ? checked : value
// //             }
// //         })
// //     }
    
// //     return (
// //         <form>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //                 value={formData.firstName}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //                 value={formData.lastName}
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //                 value={formData.email}
// //             />
// //             <textarea 
// //                 value={formData.comments}
// //                 placeholder="Comments"
// //                 onChange={handleChange}
// //                 name="comments"
// //             />
// //             <input 
// //                 type="checkbox" 
// //                 id="isFriendly" 
// //                 checked={formData.isFriendly}
// //                 onChange={handleChange}
// //                 name="isFriendly"
// //             />
// //             <label htmlFor="isFriendly">Are you friendly?</label>
// //             <br />
// //             <br />
            
// //             <fieldset>
// //                 <legend>Current employment status</legend>
// //                 <input 
// //                     type="radio"
// //                     id="unemployed"
// //                     name="employment"
// //                     value="unemployed"
// //                     checked={formData.employment === "unemployed"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="unemployed">Unemployed</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="part-time"
// //                     name="employment"
// //                     value="part-time"
// //                     checked={formData.employment === "part-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="part-time">Part-time</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="full-time"
// //                     name="employment"
// //                     value="full-time"
// //                     checked={formData.employment === "full-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="full-time">Full-time</label>
// //                 <br />
// //             </fieldset>
// //             <br />
            
// //             <label htmlFor="favColor">What is your favorite color?</label>
// //             <br />
// //             <select 
// //                 id="favColor"
// //                 value={formData.favColor}
// //                 onChange={handleChange}
// //                 name="favColor"
// //             >
// //                 <option value="">-- Choose --</option>
// //                 <option value="red">Red</option>
// //                 <option value="orange">Orange</option>
// //                 <option value="yellow">Yellow</option>
// //                 <option value="green">Green</option>
// //                 <option value="blue">Blue</option>
// //                 <option value="indigo">Indigo</option>
// //                 <option value="violet">Violet</option>
// //             </select>
// //         </form>
// //     )
// // }



// // import React from "react"

// // export default function Form() {
// //     const [formData, setFormData] = React.useState(
// //         {
// //             firstName: "", 
// //             lastName: "", 
// //             email: "", 
// //             comments: "", 
// //             isFriendly: true,
// //             employment: "",
// //             favColor: ""
// //         }
// //     )
    
// //     function handleChange(event) {
// //         const {name, value, type, checked} = event.target
// //         setFormData(prevFormData => {
// //             return {
// //                 ...prevFormData,
// //                 [name]: type === "checkbox" ? checked : value
// //             }
// //         })
// //     }
    
// //     function handleSubmit(event) {
// //         event.preventDefault()
// //         //submitToApi(formData)
// //         console.log(formData)
// //     }
    
// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 onChange={handleChange}
// //                 name="firstName"
// //                 value={formData.firstName}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 onChange={handleChange}
// //                 name="lastName"
// //                 value={formData.lastName}
// //             />
// //             <input
// //                 type="email"
// //                 placeholder="Email"
// //                 onChange={handleChange}
// //                 name="email"
// //                 value={formData.email}
// //             />
// //             <textarea 
// //                 value={formData.comments}
// //                 placeholder="Comments"
// //                 onChange={handleChange}
// //                 name="comments"
// //             />
// //             <input 
// //                 type="checkbox" 
// //                 id="isFriendly" 
// //                 checked={formData.isFriendly}
// //                 onChange={handleChange}
// //                 name="isFriendly"
// //             />
// //             <label htmlFor="isFriendly">Are you friendly?</label>
// //             <br />
// //             <br />
            
// //             <fieldset>
// //                 <legend>Current employment status</legend>
// //                 <input 
// //                     type="radio"
// //                     id="unemployed"
// //                     name="employment"
// //                     value="unemployed"
// //                     checked={formData.employment === "unemployed"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="unemployed">Unemployed</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="part-time"
// //                     name="employment"
// //                     value="part-time"
// //                     checked={formData.employment === "part-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="part-time">Part-time</label>
// //                 <br />
                
// //                 <input 
// //                     type="radio"
// //                     id="full-time"
// //                     name="employment"
// //                     value="full-time"
// //                     checked={formData.employment === "full-time"}
// //                     onChange={handleChange}
// //                 />
// //                 <label htmlFor="full-time">Full-time</label>
// //                 <br />
// //             </fieldset>
// //             <br />
            
// //             <label htmlFor="favColor">What is your favorite color?</label>
// //             <br />
// //             <select 
// //                 id="favColor" 
// //                 value={formData.favColor}
// //                 onChange={handleChange}
// //                 name="favColor"
// //             >
// //                 <option value="red">Red</option>
// //                 <option value="orange">Orange</option>
// //                 <option value="yellow">Yellow</option>
// //                 <option value="green">Green</option>
// //                 <option value="blue">Blue</option>
// //                 <option value="indigo">Indigo</option>
// //                 <option value="violet">Violet</option>
// //             </select>
// //             <br />
// //             <br />
// //             <button>Submit</button>
// //         </form>
// //     )
// // }


// // import React from "react"

// // export default function App() {
// //     const [formData, setFormData] = React.useState({
// //         email: "",
// //         password: "",
// //         passwordConfirm: "",
// //         joinedNewsletter: true
// //     })
    
  
    
// //     function handleChange(event) {
// //         const {name, value, type, checked} = event.target
// //         setFormData(prevFormData => ({
// //             ...prevFormData,
// //             [name]: type === "checkbox" ? checked : value
// //         }))
// //     }
    
// //     function handleSubmit(event) {
// //         event.preventDefault()
// //         if(formData.password === formData.passwordConfirm) {
// //             console.log("Successfully signed up")
// //         } else {
// //             console.log("Passwords do not match")
// //             return
// //         }
        
// //         if(formData.joinedNewsletter) {
// //             console.log("Thanks for signing up for our newsletter!")
// //         }
// //     }
    
// //     return (
// //         <div className="form-container">
// //             <form className="form" onSubmit={handleSubmit}>
// //                 <input 
// //                     type="email" 
// //                     placeholder="Email address"
// //                     className="form--input"
// //                     name="email"
// //                     onChange={handleChange}
// //                     value={formData.email}
// //                 />
// //                 <input 
// //                     type="password" 
// //                     placeholder="Password"
// //                     className="form--input"
// //                     name="password"
// //                     onChange={handleChange}
// //                     value={formData.password}
// //                 />
// //                 <input 
// //                     type="password" 
// //                     placeholder="Confirm password"
// //                     className="form--input"
// //                     name="passwordConfirm"
// //                     onChange={handleChange}
// //                     value={formData.passwordConfirm}
// //                 />
                
// //                 <div className="form--marketing">
// //                     <input
// //                         id="okayToEmail"
// //                         type="checkbox"
// //                         name="joinedNewsletter"
// //                         onChange={handleChange}
// //                         checked={formData.joinedNewsletter}
// //                     />
// //                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
// //                 </div>
// //                 <button 
// //                     className="form--submit"
// //                 >
// //                     Sign up
// //                 </button>
// //             </form>
// //         </div>
// //     )
// // }





// // import React from "react"

// // export default function Practice() {
// //     const [starWarsData, setStarWarsData] = React.useState({})
// //     console.log("Component rendered")
    
    


// //          // side effects
// //     React.useEffect(function() {
// //         fetch("https://swapi.dev/api/people/1")
// //             .then(res => res.json())
// //             // .then(data => setStarWarsData(data))
// //     },[])
    
// //     return (
// //         <div>
// //             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
// //         </div>
// //     )
// // }



// // import React from "react"

// // export default function Practice() {
// //     // const [starWarsData, setStarWarsData] = React.useState({})
// //     const [count, setCount] = React.useState(0)
    
// //     // console.log("Component rendered")
    
   
// //     React.useEffect(() => {
// //         console.log("Effect function ran")
// //     }, [count])
    
// //     return (
// //         <div>
// //             {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
// //             <h2>The count is {count}</h2>
// //             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
// //         </div>
// //     )
// // }

// // import React from "react"

// // export default function App() {
// //     const [starWarsData, setStarWarsData] = React.useState({})
// //     const [count, setCount] = React.useState(0)
    
// //     /**
// //      * Quiz:
// //      * 1. What will happen if I put back our Star Wars API call
// //      *    into the effect function?
// //      * 2. How will the useEffect be different if I use 
// //      *    setStarWarsData() instead of console.log()
// //      */
// //     React.useEffect(function() {
// //         fetch("https://swapi.dev/api/people/1")
// //             .then(res => res.json())
// //             .then(data => setStarWarsData(data))
// //     }, [count])
    
// //     return (
// //         <div>
// //             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
// //             <h2>The count is {count}</h2>
// //             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
// //         </div>
// //     )
// // }

// // import React from "react"

// // export default function Practice() {
// //     const [starWarsData, setStarWarsData] = React.useState({})
// //     const [count, setCount] = React.useState(0)
    
// //     /**
// //      * Quiz:
// //      * 1. What will happen if I put back our Star Wars API call
// //      *    into the effect function?
// //      * 2. How will the useEffect be different if I use 
// //      *    setStarWarsData() instead of console.log()
// //      * 3. What SHOULD be in our dependencies array in this case?
// //      */
// //     React.useEffect(function() {
// //         console.log("Effect ran")
// //         fetch("https://swapi.dev/api/people/1")
// //             .then(res => res.json())
// //             .then(data => setStarWarsData(data))
// //     }, [])
    
// //     return (
// //         <div>
// //             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
// //             <h2>The count is {count}</h2>
// //             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
// //         </div>
// //     )
// // }









// //https://scrimba.com/learn/learnreact/sign-up-form-practice-co30d477b8025a70873e8cb6a






// //https://scrimba.com/learn/learnreact/forms-in-react-checkbox-co6da4637a27cca33be7cb1d7




// //https://scrimba.com/learn/learnreact/controlled-inputs-co5c7481f910db53cc421f020



// // //use state first example
// // // function Pracit() {
// // //     const [things, setThings] = useState(["Thing 1", "Thing 2"])
    
// // //     function addItem() {
// // //         const newThingText = `Thing ${things.length + 1}`
// // //         setThings(prevState => [...prevState, newThingText])
// // //     }
    
// // //     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
// // //     return (
// // //         <div>
// // //             <button onClick={addItem}>Add Item</button>
// // //             {thingsElements}
// // //         </div>
// // //     )
// // // }

// // // export default Pracit;


// // //other example

// // // function App() {
// // //     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
// // //     function addItem() {
// // //         setThingsArray(prevState => {
// // //             return [...prevState, `Thing ${prevState.length + 1}`]
// // //         })
// // //     }
    
// // //     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
// // //     return (
// // //         <div>
// // //             <button onClick={addItem}>Add Item</button>
// // //             {thingsElements}
// // //         </div>
// // //     )
// // // }




// // //example 2
// // // export default function Pracit() {
// // //     /**
// // //      * Challenge: 
// // //      * Add functionality to the minus button
// // //      */
// // //     const [count, setCount] = useState(0)
    
// // //     function add() {
// // //         setCount(count + 1)
// // //     }
    
// // //     function subtract() {
// // //         setCount(count - 1)
// // //     }
    
// // //     return (
// // //         <div className="counter">
// // //             <button className="counter--minus" onClick={subtract}>– decrement</button>
// // //             <div className="counter--count">
// // //                 <h1>{count}</h1>
// // //             </div>
// // //             <button className="counter--plus" onClick={add}>+ increment</button>
// // //         </div>
// // //     )
// // // }


// // //callback function example 3
// // // export default function Pracit() {
// // //     const [count, setCount] = useState(0)
   
// // //     function add() {
// // //         setCount(prevCount => prevCount + 1)
// // //     }
// // //     // Challenge: update `substract` to use a callback function
    
// // //     function subtract() {
// // //         setCount(prevCount => prevCount - 1)
// // //     }
    
// // //     return (
// // //         <div className="counter">
// // //             <button className="counter--minus" onClick={subtract}>–</button>
// // //             <div className="counter--count">
// // //                 <h1>{count}</h1>
// // //             </div>
// // //             <button className="counter--plus" onClick={add}>+</button>
// // //         </div>
// // //     )
// // // }



// // // import React from "react" Terrnoary operatior example

// // // export default function App() {
// // //     /**
// // //      * Challenge: move our ternary directly inside of the JSX
// // //      * so the "Yes" and "No" are determined inside the <h1>
// // //      * 
// // //      * Hint: you will no longer need the `answer` variable
// // //      */
// // //     const isGoingOut = false
    
// // //     return (
// // //         <div className="state">
// // //             <h1 className="state--title">Do I feel like going out tonight?</h1>
// // //             <div className="state--value">
// // //                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
// // //             </div>
// // //         </div>
// // //     )
// // // }


// // // ternary oper 2
// // // import React from "react"

// // // export default function App() {
// // //     const [isGoingOut, setIsGoingOut] = React.useState(true)
// // //     /**
// // //      * Challenge: 
// // //      * - Initialize state for `isGoingOut` as a boolean
// // //      * - Make it so clicking the div.state--value flips that
// // //      *   boolean value (true -> false, false -> true)
// // //      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
// // //      */
// // //     function changeMind() {
// // //         setIsGoingOut(prevState => !prevState)
// // //     }
    
// // //     return (
// // //         <div className="state">
// // //             <h1 className="state--title">Do I feel like going out tonight?</h1>
// // //             <div onClick={changeMind} className="state--value">
// // //                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
// // //             </div>
// // //         </div>
// // //     )
// // // }


// //  /**
// //      * Note: if you ever need the old value of state
// //      * to help you determine the new value of state,
// //      * you should pass a callback function to your
// //      * state setter function instead of using
// //      * state directly. This callback function will
// //      * receive the old value of state as its parameter,
// //      * which you can then use to determine your new
// //      * value of state.
// //      */





// // //https://scrimba.com/learn/learnreact/props-vs-state-props-co090400fb604a75d6b889cf4

// // // import React from 'react';
// // // import ReactDOM from 'react-dom';

// // // function App() {
// // //     const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
// // //     function addItem() {
// // //         const newThingText = `Thing ${things.length + 1}`
// // //         setThings(prevState => [...prevState, newThingText])
// // //     }
    
// // //     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
// // //     return (
// // //         <div>
// // //             <button onClick={addItem}>Add Item</button>
// // //             {thingsElements}
// // //         </div>
// // //     )
// // // }

// // // ReactDOM.render(<App />, document.getElementById('root'));


// // ///object use karna ha
// // // import React from "react"

// // // export default function App() {
// // //     const [contact, setContact] = React.useState({
// // //         firstName: "John",
// // //         lastName: "Doe",
// // //         phone: "+1 (719) 555-1212",
// // //         email: "itsmyrealname@example.com",
// // //         isFavorite: true
// // //     })
    
// // //     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
// // //     function toggleFavorite() {
// // //         console.log("Toggle Favorite")
// // //     }
    
// // //     return (
// // //         <main>
// // //             <article className="card">
// // //                 <img src="./images/user.png" className="card--image" />
// // //                 <div className="card--info">
// // //                     <img 
// // //                         src={`../images/${starIcon}`} 
// // //                         className="card--favorite"
// // //                         onClick={toggleFavorite}
// // //                     />
// // //                     <h2 className="card--name">
// // //                         {contact.firstName} {contact.lastName}
// // //                     </h2>
// // //                     <p className="card--contact">{contact.phone}</p>
// // //                     <p className="card--contact">{contact.email}</p>
// // //                 </div>
                
// // //             </article>
// // //         </main>
// // //     )
// // // }


// // import React from "react"

// // export default function Joke(props) {
// //     const [isShown, setIsShown] = React.useState(false)
// //     function toggleShown(){
// //         setIsShown(prevShown => !prevShown)
// //     }
    
  
// //     return (
// //         <div>
// //             {props.setup && <h3>{props.setup}</h3>}
// //             {isShown && <p>{props.punchline}</p>}
// //             <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
// //             <hr />
// //         </div>
// //     )
// // }

// // //https://scrimba.com/learn/learnreact/boxes-challenge-part-1-co4ff4b9f8504c9a03077bf2c

// // //https://scrimba.com/learn/learnreact/conditional-rendering-practice-co7a3413c9530c3e2804c4916
// // //0:56

// // //https://scrimba.com/learn/learnreact/conditional-rendering-practice-co6c14590bfc4e8abe0ef2b40


// {/* <html>
//     <head>
//         <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
        
//         <form 
//             action="https://my-php-backend.com" 
//             method="POST"
//             id="my-form"
//         >
//             <label for="first-name">First Name: </label>
//             <input 
//                 type="text" 
//                 id="first-name" 
//                 name="firstName" 
//                 class="input" 
//             />
//             <br />
//             <label for="last-name">Last Name: </label>
//             <input 
//                 type="text" 
//                 id="last-name" 
//                 name="lastName" 
//                 class="input" 
//             />
//             <br />
//             <input type="submit" value="Submit" />
//         </form>
        
//         <script src="index.pack.js"></script>
//     </body>
// </html> */}

import React from "react"

// export default function Practice() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
    
//     /**
//      * Challenge: Combine `count` with the request URL
//      * so pressing the "Get Next Character" button will
//      * get a new character from the Star Wars API.
//      * Remember: don't forget to consider the dependencies
//      * array!
//      */
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch(`https://swapi.dev/api/people/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

// export default function Practice() {
    
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
//     React.useEffect(() => {
//         window.addEventListener("resize", function() {
//             setWindowWidth(window.innerWidth)
//         })
//     }, [])
    
//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// }




export default function Practice() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}



// export default function Practice() {
//     /**
//      * Challenge:
//      * 1. Create state called `show`, default to `true`
//      * 2. When the button is clicked, toggle `show`
//      * 3. Only display `<WindowTracker>` if `show` is `true`
//      */
    
//     const [show, setShow] = React.useState(true)
    
//     function toggle() {
//         setShow(prevShow => !prevShow)
//     }
    
//     return (
//         <div className="container">
//             <button onClick={toggle}>
//                 Toggle WindowTracker
//             </button>
//             {show && <WindowTracker />}
//         </div>
//     )
// }
//vieo 61 se