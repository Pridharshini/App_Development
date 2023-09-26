import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight,faUser, faBell} from '@fortawesome/free-solid-svg-icons';
import '../Component/Navbar.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';


function Navbar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  
  return (
    <div>
      <nav className='monish'>
        <label className="logo">Welcome {username}!</label>
        <ul>
          <li> 
            <a>
          <Link to ="/home">  Home</Link>
            </a>
          </li>
      
          <li>
            <a >
              Messages <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul>
              <li>
                <a >Compose</a>
              </li>
              <li>
                <a >Read</a>
              </li>
              
            </ul>
          </li>
          <li>
  <a>
    <FontAwesomeIcon icon={faBell} /> {/* Use the notification icon */}
  </a>
</li>

          <li>
          <li>
       <a >
          <FontAwesomeIcon icon={faUser} /> 
          <FontAwesomeIcon icon={faCaretDown} />    
            </a>
            <ul>
                <li>
                    <p>{username}</p>
                </li>
                <li>
               <Link to ="/"> <a>Logout </a></Link>
                </li>
            </ul>
</li>
          </li>
        </ul>
      </nav>
      <section></section>
    
    </div>
  );
}

export default  Navbar;
