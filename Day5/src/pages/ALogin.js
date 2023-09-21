import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authActions';
import './Alogin.css';

const ALogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const isUsernameValid = (username) => {
    // Validate username format (contains at least one _ or .)
    const usernameRegex = /^[A-Za-z0-9]*[_.]+[A-Za-z0-9]*$/;
    return usernameRegex.test(username);
  };

  const isPasswordValid = (password) => {
    // Validate password format
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    // Perform validation
    if (!isUsernameValid(username)) {
      setError('invalid username');
    } else if (!isPasswordValid(password)) {
      setError(
        'invalid password'
      );
    } else {
      // Validation passed, dispatch login action
      dispatch(login(username)); // Pass the username when logging in
      onLogin(username); // Notify the parent component about the successful login
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ALogin;
