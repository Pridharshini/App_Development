import React from 'react';
// import { Link } from 'react-router-dom';
import './Homepage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    
    <div>
    
    <div className="Home">
    <div className="tit"> <h1>WELCOME</h1> </div>
       <Link to ="/Adminlogin" ><div className="Homeadmin">
         LOGIN AS ADMIN
        </div>
        </Link>
        <Link to ="/Adminlogin" >
               <div className="Homestaff">
          LOGIN AS EMPLOYEE
        </div>
        </Link>``
      </div>
 </div>
);
}
