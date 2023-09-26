import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight,faUser, faBell} from '@fortawesome/free-solid-svg-icons';
import '../Component/Navbar1.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';


function Navbar1() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  return (
    <div>
      <nav className='monish'>
        <label className="logo">{username}</label>
        <ul>
        <li> 
            <a>
            Home
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
  <a >
   <FontAwesomeIcon icon={faBell} /> 
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
                    <a>Logout

                    </a>
                </li>
            </ul>
</li>
          </li>
        </ul>
      </nav>
    
    
    </div>
  );
}

export default  Navbar1;
