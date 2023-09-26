import React, { useState } from 'react'
import "./Entry.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';

export default function Entry() {
  const nav=useNavigate("");
  const dispatch=useDispatch("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const submithandler=(e)=>{
    e.preventDefault();
    if(username&&password)
    {
      dispatch(login(username));
      nav("/production")
    }
     if(username==='Admin'&&password==='Admin')
    {
      nav("/overview")
}
}
  return (
    
    <div className="login">
    
    <div className="form">
    <div className="box">
      <div className="header">
       <h1>LOGIN</h1>
      </div>
    
      <form onSubmit={submithandler}>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        </div>
        <input className="signup-btn" onClick={submithandler} type="submit" value="LOGIN" />
      </form>
    <br/>
    <Link to='/signup' style={{textDecoration:'none'}}> <p > No Account? Signup Now!</p></Link> 
      
    </div>
    </div>
</div>)
}
