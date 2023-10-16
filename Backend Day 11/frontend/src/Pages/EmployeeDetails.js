import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/EmployeeDetails.css';
import AdminDashboard from './AdminDashboard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetails() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee/getAll");
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Failed to fetch employee details:', error);
      }
    };
    fetchData();
  }, []);
  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
  // const handleUpdateEmployeeDetails = async (empId, updatedEmployeeData) => {
  //   try {
  //     // Send a PUT request to your backend API to update the employee's details
  //     const response = await axios.put(`http://localhost:8080/employee/${empId}`, updatedEmployeeData);
  
  //     // Assuming the response contains the updated employee data, update the local state
  //     setEmployeeData((prevEmployeeData) =>
  //       prevEmployeeData.map((employee) =>
  //         employee.empId === empId ? response.data : employee
  //       )
  //     );
  
  //     // You can also display a success message to the user
  //     alert('Employee details updated successfully');
  //   } catch (error) {
  //     console.error('Failed to update employee details:', error);
  //     // You can also display an error message to the user
  //     alert('Failed to update employee details');
  //   }
  // };
  
  const handleDeleteEmployee = async (empId) => {
    try {
      // Send a DELETE request to your backend API to delete the employee
      await axios.delete(`http://localhost:1204/employee/delete/${empId}`);

      // Remove the deleted employee from the local state
      setEmployeeData((prevEmployeeData) =>
        prevEmployeeData.filter((employee) => employee.empId !== empId)
      );

      // You can also display a success message to the user
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('Failed to delete employee:', error);
      // You can also display an error message to the user
      alert('Failed to delete employee');
    }
  };

  return (
    <div className="whole">
      <div>
        <AdminDashboard />
      </div>
      <Link to="/addemp">
        <button className='add-button'>Add Employee</button>
      </Link>
      <section>
        {employeeData.map((employee) => (
          <div className="card" key={employee.empId}>
            <div className="top">
              <img
                className="profile-photo"
                src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                alt="profile-img"
              />
              <h3 className="name">{employee.empName}</h3>
              <p className="title">{employee.email}</p>
              <div className="time">{employee.contactnum}</div>
            </div>
            <div className="bottom">
              <Link to={`/updateemp/${employee.empId}`}>
                <button className="profile-action">Edit </button>
              </Link>
              <br />
              <button className="profile-action" onClick={()=> handleDeleteEmployee(employee.empId)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default EmployeeDetails;
