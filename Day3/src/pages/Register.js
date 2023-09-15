import React, { useState } from 'react';

import '../assets/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const isPasswordValid = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const isContactNumberValid = (contactNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(contactNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    if (!isPasswordValid(formData.password, formData.confirmPassword)) {
      alert('Passwords do not match.');
      return;
    }

    else if (!isContactNumberValid(formData.contactNumber)) {
      alert('Please enter a valid 10-digit contact number.');
      return;
    }
    else{
      alert('Enter all fields');
      return;
    }

    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email.."
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <label>Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <div className="container">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;