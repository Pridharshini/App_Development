import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';

export default function Footer() {
  
  const nav=useNavigate();
  

  

  const navProfile=()=>{
    nav("/")
  }
  const navHome=()=>
  {
    nav("/")
  }
  const navfaq=()=>
  {
    nav("/faq")
  }
  return (
    <footer class="ground1">
  <div class="content">
    <div class="top">
      <div class="logo-details">
        <i class="fab fa-slack"></i>
        
      </div>
      <div class="media-icons">
        <a href="https://www.facebook.com" target="_blank"><FacebookRoundedIcon id="icon"/></a>
        <a href="https://twitter.com/" target="_blank"><TwitterIcon id="icon"/></a>
        <a href="https://www.instagram.com/" target="_blank"><InstagramIcon id="icon"/></a>
        <a href="https://github.com/monishperiyasamy" target="_blank"><GitHubIcon id="icon"/></a>
        <a href="https://www.youtube.com" target="_blank"><SubscriptionsRoundedIcon id="icon"/></a>
      </div>
    </div>
    <div class="link-boxes">
      <ul class="box">
        <li class="link_name">COMPANY</li>
        <li style={{cursor:'pointer'}} onClick={navHome} ><a >Home</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Get started</a></li>
      </ul>
      {/* <ul class="box">
        <li class="link_name">SERVICES</li>
        <li><a >Student_Enrollment</a></li>
        <li><a >Course_Registration</a></li>
        <li><a >Financial_Aid</a></li>
        <li><a >Academic_Records</a></li>
        <li><a >Attendance_Tracking</a></li>
      </ul> */}
      <ul class="box">
        <li class="link_name"></li>
        <Link to ="/terms" > <li ><a >Terms and Conditions</a></li></Link>
        <Link to ="/policy" ><li><a >Privacy Policy</a></li></Link>
        
        <li><a >Feedback</a></li>
        <Link to ="/faq"><li onClick={navfaq}><a >FAQ</a></li></Link> 
       
      </ul>
      {/* <ul class="box">
        <li class="link_name">COURSES</li>
        <li><a >HTML & CSS</a></li>
        <li><a >JavaScript</a></li>
        <li><a >Java</a></li>
        <li><a >RDBMS</a></li>
      </ul> */}
      <ul class="box input-box">
        <li class="link_name"  >SUBSCRIBE</li>
      <li ><input   type="text" placeholder="Enter your Email"/></li>
        <li><input  type="button" value="Subscribe"/></li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright © 2021 <a >Logo.</a>All rights reserved</span>
      <span class="policy_terms">
     
        <Link to="/privacy"><a >Privacy policy</a></Link>
        <a>Terms</a>
      </span>
    </div>
  </div>
</footer>
  );
}
