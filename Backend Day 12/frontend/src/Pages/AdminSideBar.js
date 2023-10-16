import React from 'react';
import '../Assets/AdminSidebar.css';

function AdminSideBar() {
  return (
    <div>
      <div className="sidebar-btn">
        <span className="fas fa-bars"></span>
      </div>
      <nav className="sidebar-container show">
     
        <ul className="sidebar-navigation">
       
         
            <ul className="feat-show">
             
             
              <li><a>Employees</a></li>
              <br></br>
            </ul>
        
          <li>
           
            <ul className="serv-show">
              <li><a href="#">Schedlue</a></li>
              <br></br>
              <li><a href="#">Approvals</a></li>
              <br></br>
              <li><a href="#">Profile</a></li>
              <br></br>

              <li><a href="#">Logout</a></li>
            </ul>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default AdminSideBar;
