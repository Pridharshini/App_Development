import React from 'react'
import '../Assets/EmployeeSidebar.css'
import { Link } from 'react-router-dom';
function EmployeeSidebar() {
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
                  <li><Link to="/scheduledetails">Schedlue</Link></li>
                  <br></br>
                  <li><a href="#">Request</a></li>
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

export default EmployeeSidebar