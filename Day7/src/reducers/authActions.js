// src/reducers/authActions.js

export const login = (user) => {
    return {
      type: 'LOGIN',
      payload: user, // Pass the user's name as payload
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  