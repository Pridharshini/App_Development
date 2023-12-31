import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function UpdateEmployee() {
  const nav = useNavigate();
  const { empId } = useParams();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Employee details updated successfully!!");
    nav("/fees");
    console.log('Form submitted:', formData);
  };

  const [response, setResponse] = useState("");
  useEffect(() => {
    const fetchById = async () => {
      try {
        const response = await fetch(`http://localhost:1204/employee/getempbyid/${empId}`);
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        setFormData({
          empName: data.empName,
          email: data.email,
          gender: data.gender,
          contactnum: data.contactnum,
          address: data.address,
          age: data.age,
          dob: data.dob,
        });
      } catch (error) {
        console.log('Error:', error);
      }
    };
  
    fetchById();
  }, [empId]);
  

  const update = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:1204/employee/${empId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponse(data);
      nav("/employee");
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div class="whole">
 
    <div className="fees-form-container">
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="StudentID">Employee Name</label>
          <input
            type="text"
            name="empName"
            id="studentID"
            value={formData.empName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            id="name"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quota">Gender</label>
          <input
            type="text"
            name=" gender"
            id="quota"
            value={formData.gender}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feePaid">Contact number</label>
          <input
            type="text"
            name="contactnum"
            id="feePaid"
            value={formData.contactnum}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalFees">Address</label>
          <input
            type="text"
            name="address"
            id="totalFees"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="totalFees">Age</label>
          <input
            type="text"
            name="age"
            id="totalFees"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="totalFees">DOB</label>
          <input
            type="text"
            name="dob"
            id="totalFees"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
          
        </div>
      <Link to ="/employee">  <button  type="submit" className="submit-button" onClick={update}>
          Submit
        </button></Link>
      </form>
    </div>
    </div>
  );
};


export default UpdateEmployee;
