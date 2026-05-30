import React, { useState } from 'react'
import {Link, redirect} from 'react-router-dom'
// for redirecting
import { useNavigate } from 'react-router-dom';
import "./Register.css";


function Reg() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [number,setnumber]=useState("");
    const [password,setpassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");

    let navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        // Validation
        if (name=="" || email=="" || password=="" || confirmPassword==""){
            alert('please fill all the details')
            return;
        }
        if(password!=confirmPassword){
            alert("password is not matching")
            return;
        }
        let obj={
            name,
            email,
            number,
            password
            // confirmPassword=> here no need sent the backend 
        }
        console.log(obj);
        alert("Register Successfull");
        // redirect to login
        navigate("/login")

        setname("");
        setemail("");
        setnumber("");
        setpassword("");
        setconfirmPassword("");
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="title">Register</h1>
            <input type="text" placeholder='Enter Name' onChange={(event)=>setname(event.target.value)} value={name}/>
            <input type="email" placeholder='Enter email' onChange={(event)=>setemail(event.target.value)} value={email}/>
            <input type="number" placeholder='Enter Number' onChange={(event)=>setnumber(event.target.value)} value={number}/>
            <input type="password" placeholder='Enter Password' onChange={(event)=>setpassword(event.target.value)} value={password}/>
            <input type="password" placeholder='Confirm Password' onChange={(event)=>setconfirmPassword(event.target.value)} value={confirmPassword}/>
            <button className='btn'>Register</button>
            <p>
                already registered?
                <Link to="/login">Login</Link>
            </p>
        </form>
    </div>
  )
}

export default Reg