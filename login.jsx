import React, { useState } from "react";
import './login.css';

function Login(){
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
const formData = [{label:"Email"},{label:"Password"}]

    return(


        <div className="login">
            <form onSubmit={SubmitFormData}>
                {formData.map((data) => (
                <input
                type="text"
                name={data.name}
                defaultValue={data.name}
                placeholder={data.label}
                onChange={handleChange}
              />
              
              ))}
              <button type="submit">Login</button>
            </form>

        </div>


        // <div className="login">
        //     <div className="login1">
        //         <h1>Welcome Back</h1>
        //         <form onSubmit={SubmitFormData}>
        //             <div className="mail">
        //             <label>EMAIL</label>
        //             <input type="text" name="email" 
        //              defaultValue={input.email} onChange={handleChange}
        //              placeholder="e.g name@xyz.com"/>
        //             </div>
        //           <div className="pass">
        //           <label>PASSWORD</label>
        //             <input type="text" name="password" placeholder="enter your password" 
        //             defaultValue={input.password} onChange={handleChange}
        //             required autoComplete="current-passwoed"/> 
        //           </div>
        //            <div className="loginbutton">
        //            <button type="submit">Login</button>
        //            </div>
                   
        //         </form>
        //     </div>
      
    )
}
export default Login;