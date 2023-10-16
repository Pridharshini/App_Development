import React, { useState } from 'react';
import '../Assets/AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddEmployee() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    empName: '',
    email: '',
    gender: '',
    contactnum: '',
    address: '',
    age: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new employee
      const response = await axios.post("http://localhost:1204/employee", formData);
      console.log('Employee details added:', response.data);
      alert('Employee details added successfully');
      nav("/employee"); // Redirect to the employee list page
    } catch (error) {
      console.error('Failed to add employee:', error);
      alert('Failed to add employee');
    }
  };

  return (
    <div className="whole">
      <div className="fees-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="empName">Employee Name</label>
            <input
              type="text"
              name="empName"
              id="empName"
              value={formData.empName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactnum">Contact number</label>
            <input
              type="text"
              name="contactnum"
              id="contactnum"
              value={formData.contactnum}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">DOB</label>
            <input
              type="text"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>

    
            <button type="submit" className="submit-button" onClick={handleSubmit}>
              Submit
            </button>     
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
