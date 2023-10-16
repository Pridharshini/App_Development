import React from 'react'
import '../Assets/EmployeeNavbar.css'
import { Link } from 'react-router-dom'
function EmployeeNavbar() {
  
    return (
        <div>
          <header>
            <nav className="admin-navbar">
              <h2 className="admin-logo">
               SKEDULO
              </h2>
              <input type="checkbox" id="admin-menu-toggler" />
             
              <div className='admin-navda'>
                <ul className="admin-links">
                  <li>
                    <Link to="/">Home</Link>
    
                  </li>
                  
                  <li>
                    <Link to="/admin-about">About Us</Link>
                  </li>
                  <li className="admin-login-drop">
                    
                  <a>Notification</a>  
                    
                    
                  </li>
                  <li>
                    <Link to="/admin-contact">Contact Us</Link>
                  </li>
                 
                  
                </ul>
              </div>
            </nav>
          </header>
        </div>
      )
    }
    

export default EmployeeNavbar