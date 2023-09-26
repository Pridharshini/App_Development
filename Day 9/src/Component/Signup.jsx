import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Entry.css'

export default function Signup() {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[conpassword,setconpassword]=useState('');
  let handleSubmit=(e)=>{
    e.preventDefault();
    if(name.length===0||email.length===0||conpassword.length===0||password.length===0){
      alert("Enter All fields")
    }
  if(name.length===0){
    alert("Enter name")
  }
  else if(email.length===0){
    alert("Enter enailid")
  }
  else if(password.length===0){
    alert("Enter password")
  }
  else if(conpassword!==password){
    alert("Mismatch in password!")
  }
  else
  {
       nav("/");
  }
}
  return (
    <div className="login">
    <div className="form">
    <div className="box">
      <div className="header">
      {/* <img width="50" height="50" src="https://img.icons8.com/clouds/100/login-rounded-right.png" alt="login-rounded-right"/> */}
      <h1>SIGN UP</h1>
      </div>
    
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text"  onChange={(e)=>setname(e.target.value)} placeholder="Name" />
        </div>
        <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email"  onChange={(e)=>setemail(e.target.value)}   placeholder="Email" />
      </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"  onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"  onChange={(e)=>setconpassword(e.target.value)} placeholder="Confirm Password" />
        </div>
        <input className="signup-btn" onClick={handleSubmit} type="submit" value="SIGNUP" />
      </form>
    <p style={{textDecoration:'none'}} > <Link to='/' >Already Have an account? Login</Link></p>
      
    </div>
    </div>
</div>
)
}