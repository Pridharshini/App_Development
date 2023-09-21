// App.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ALogin from './pages/ALogin';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState('');
  const [openSidebar, setOpenSidebar] = useState(false); // State to control sidebar visibility

  const handleLogin = (enteredUsername) => {
    setUsername(enteredUsername);
  };

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="App">
      {/* Include the Sidebar component and pass props */}
       {/* <BrowserRouter>
       <Routes>
        <Route path="/" element ={<ALogin/>}/>
       </Routes>
       </BrowserRouter> */}
      <div className={`content ${openSidebar ? 'content-shifted' : ''}`}>
        {isAuthenticated ? (
          <Dashboard username={username} />
          ) : (
            <ALogin onLogin={handleLogin} />
            )}
            <Sidebar className="side" openSidebarToggle={openSidebar} OpenSidebar={toggleSidebar} />
           
      </div>
    </div>
  );
};

export default App;