import React, { useState } from 'react';
import './SideBar.css'; // Import the CSS file for styling
// import Navbar from '../Pages/Navbar'
// import Footer from '../Pages/Footer'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from './Home';
import Navbar from '../Pages/Navbar';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);
  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
    <Navbar/>
    <div className='homeredux'>
    <Home/></div>
    <div className="sidebar">
      <div className="sidebar-header">
      <DashboardIcon></DashboardIcon> DASHBOARD
      </div>
      <ul className="sidebar-menu">
        <Link to="/overview" style={{textDecoration:"none" ,color:"inherit"}}><li><button className='button'>Overview</button></li></Link>
        <li className={`sidebar-dropdown ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
          <span><button className='button'>Staffs</button></span>
          <i className={`fas ${showDropdown ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
          {/* Show caret up or down icon based on dropdown state */}
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><button className='button'>Managers</button></li>
              <li><button className='button'>Workers</button></li>
              {/* Add more dropdown items here */}
            </ul>
          )}
        </li>
        <Link to="/customer" style={{textDecoration:'none',color:'inherit'}}><li><button className='button'>Customers</button></li></Link>
        <li><button className='button'> Companies</button></li>
        <li><button className='button'>Edit Employee Profile</button></li>
        <Link to="/Adminlogin" style={{textDecoration:'none',color:'inherit'}}><li><button className='button'>Login</button></li></Link>
      </ul>
      </div>
      </div>
      );
    }
    export default Sidebar;
    // <Footer/>
    // <Navbar/>
