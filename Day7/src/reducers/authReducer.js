// src/reducers/authReducer.js

const initialState = {
    isAuthenticated: false,
    user: null, // Add user property to store the user's name
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload, // Set the user's name when logging in
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null, // Clear the user's name when logging out
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  