import React, { useState } from 'react'
import {Link, redirect} from 'react-router-dom'
// for redirecting
import { useNavigate } from 'react-router-dom';


function Login() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [number,setnumber]=useState("");
    const [password,setpassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");

    let navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        // Validation
        if (email=="" || password==""){
            alert('please fill all the details')
            return;
        }
        
        let obj={
            email,
            password
            
        }
        console.log(obj);

        // from BE will get token
        // store token in local storage
        let token="1@#$fgvbyhjdtfg&"
        localStorage.setItem("token",token)



        alert("Login Successfull");
        // redirect to login
        navigate("/userDashboard")

        
        setemail("");
        setpassword("");
        
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter email' onChange={(event)=>setemail(event.target.value)} value={email}/>
            <input type="password" placeholder='Enter Password' onChange={(event)=>setpassword(event.target.value)} value={password}/>
            <button className='btn'>Login</button>
        </form>
    </div>
  )
}

export default Login