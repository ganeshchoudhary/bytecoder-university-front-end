import React, { useState } from "react";
import './signup.css';

function Signup(){
    const SubmitFormData = (e) =>{
        e.preventDefault();
        console.log(input);
    }
    const [input,setInput]=useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
      }
    return(
        <div className="signup">
            <div className="signup1">
                <h1>Sign up</h1>
                <p>Learn on your own time from top <br/>universities and businesses.</p>
                <form onSubmit={SubmitFormData}>
                    <div className="name">
                    <label>Full Name</label>
                    <input type="text" name="fullname" 
                     defaultValue={input.fullname} onChange={handleChange}
                     placeholder="enter your name"/> 
                    </div>
                    <div className="mail">
                    <label>EMAIL</label>
                    <input type="text" name="email" 
                     defaultValue={input.email} onChange={handleChange}
                     placeholder="e.g name@xyz.com"/>
                    </div>
                  <div className="pass">
                  <label>PASSWORD</label>
                    <input type="text" name="password" placeholder="enter your password" 
                    defaultValue={input.password} onChange={handleChange}
                    required autoComplete="current-passwoed"/> 
                  </div>
                   <div className="loginbutton">
                   <button type="submit">Join for free</button>
                   </div>
                   
                </form>
            </div>
        </div>
    )
}
export default Signup;