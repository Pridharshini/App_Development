import React from 'react';
import '../assets/Entry.css';
import { Link } from 'react-router-dom';

function Entry() {
  return (
    <div className="login-buttons-container">
     <Link to ="/alogin"> <button className="admin-button">Login as Admin</button></Link>
     <Link to ="/elogin">  <button className="employee-button">Login as Employee</button></Link>
    </div>
  );
}

export default Entry;