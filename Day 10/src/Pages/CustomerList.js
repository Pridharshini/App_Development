// CustomerList.js

import React, { useState } from 'react';
import './CustomerList.css';
import Sidebar from '../Component/Sidebar';
const CustomerList = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [customers, setCustomers] = useState([
    {
        id: 1,
        name: 'Amit Kumar',
        email: 'amit.kumar@gmail.com',
        location: 'Delhi, India',
        phone: '9876543210',
        signed: '22/09/2023',
        selected: false
    },
    {
        id: 2,
        name: 'Pooja Patel',
        email: 'pooja.patel@gmail.c.com',
        location: 'Mumbai, India',
        phone: '8765432109',
        signed: '15/08/2023',
        selected: false
    },
    {
        id: 3,
        name: 'Rajesh Sharma',
        email: 'rajesh.sharma@gmail.com',
        location: 'Bangalore, India',
        phone: '7890123456',
        signed: '10/07/2023',
        selected: false
    },
    {
        id: 4,
        name: 'Neha Singh',
        email: 'neha.singh@gmail.c.com',
        location: 'Hyderabad, India',
        phone: '8765432109',
        signed: '03/06/2023',
        selected: false
    },
    {
        id: 5,
        name: 'Sanjay Verma',
        email: 'sanjay.verma@gmail.com',
        location: 'Chennai, India',
        phone: '9876543210',
        signed: '18/05/2023',
        selected: false
    },
    {
        id: 6,
        name: 'Anjali Gupta',
        email: 'anjali.gupta@gmail.c.com',
        location: 'Kolkata, India',
        phone: '7890123456',
        signed: '01/04/2023',
        selected: false
    },
    {
        id: 7,
        name: 'Rajat Reddy',
        email: 'rajat.reddy@gmail.com',
        location: 'Bengaluru, India',
        phone: '8765432109',
        signed: '22/03/2023',
        selected: false
    },
    {
        id: 8,
        name: 'Kavita Mishra',
        email: 'kavita.mishra@gmail.com',
        location: 'Pune, India',
        phone: '9876543210',
        signed: '13/02/2023',
        selected: false
    },
    {
        id: 9,
        name: 'Vikram Singh',
        email: 'vikram.singh@gmail.c.com',
        location: 'Jaipur, India',
        phone: '7890123456',
        signed: '25/01/2023',
        selected: false
    },
    {
        id: 10,
        name: 'Meera Joshi',
        email: 'meera.joshi@gmail.com',
        location: 'Ahmedabad, India',
        phone: '9876543210',
        signed: '11/12/2023',
        selected: false
    },
    {
        id: 11,
        name: 'Rahul Desai',
        email: 'rahul.desai@gmail.c.com',
        location: 'Chandigarh, India',
        phone: '8765432109',
        signed: '04/11/2023',
        selected: false
    },
    {
        id: 12,
        name: 'Sarika Gupta',
        email: 'sarika.gupta@gmail.com',
        location: 'Lucknow, India',
        phone: '7890123456',
        signed: '17/10/2023',
        selected: false
    },
    {
        id: 13,
        name: 'Anika Visser',
        email: 'anika.visser@gmail.com',
        location: 'Madrid, Spain',
        phone: '9874562894',
        signed: '22/09/2023',
        selected: false
    },
    {
        
id: 14,
name: 'Daniel Smith',
email: 'daniel.smith@gmail.com',
location: 'New York, USA',
phone: '1234567890',
signed: '15/08/2023',
selected: false

    },
    {
        id: 15,
name: 'Luisa Rodriguez',
email: 'luisa.rodriguez@gma.com',
location: 'Buenos Aires, Argentina',
phone: '5556789012',
signed : '10/07/2023',
selected: false
    },
    {
        id: 16,
        name: 'Thomas Brown',
        email: 'thomas.brown@gmail.c.com',
        location: 'London, UK',
        phone: '9876543210',
        signed: '03/06/2023',
        selected: false
    },
    {
        id: 17,
name: 'Maria Garcia',
email: 'maria.garcia@gmail.com',
location: 'Barcelona, Spain',
phone: '6543219870',
signed: '18/05/2023',
selected: false
    },
    {
        id: 18,
        name: 'John Miller',
        email: 'john.miller@gmail.c.com',
        location: 'Los Angeles, USA',
        phone: '7890123456',
        signed: '01/04/2023',
        selected: false
        
    },
    {
        id: 19,
name: 'Sophie Kim',
email: 'sophie.kim@gma.com',
location: 'Seoul, South Korea',
phone: '1239874560',
signed: '22/03/2023',
selected: false

    },
    {
        id: 20,
name: 'Alexandra Johnson',
email: 'alexandra.johnson@gmail.com',
location: 'Paris, France',
phone: '9876540123',
signed: '13/02/2023',
selected: false
    },
    {
        id: 21,
name: 'Ravi Patel',
email: 'ravi.patel@gmail.com',
location: 'Mumbai, India',
phone: '6540123987',
signed: '25/01/2023',
selected: false
    },
    {
        id: 22,
name: 'Marta Gonzalez',
email: 'marta.gonzalez@gma.com',
location: 'Madrid, Spain',
phone: '7890123456',
signed: '11/12/2022',
selected: false

    },
    {
        id: 23,
name: 'David Lee',
email: 'david.lee.@gmailcom',
location: 'San Francisco, USA',
phone: '1234567890',
signed: '04/11/2022',
selected: false},
    {
        id: 24,
name: 'Elena Rossi',
email: 'elena.rossi@gmail.com',
location: 'Rome, Italy',
phone: '9876543210',
signed: '17/10/2022',
selected: false
    },
    {
        id: 25,
name: 'Sachin Sharma',
email: 'sachin.sharma@gmail.com',
location: 'Delhi, India',
phone: '8765432109',
signed: '12/09/2023',
selected: false

    },
    {
        id: 26,
name: 'Priya Singh',
email: 'priya.singh@gmail.com',
location: 'Jaipur, India',
phone: '7890123456',
signed: '01/08/2023',
selected: false
    },
    
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleSelectAll = () => {
    const updatedCustomers = customers.map((customer) => ({
      ...customer,
      selected: !selectAll,
    }));
    setCustomers(updatedCustomers);
    setSelectAll(!selectAll);
  };

  const toggleSelect = (id) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === id ? { ...customer, selected: !customer.selected } : customer
    );
    setCustomers(updatedCustomers);
    setSelectAll(updatedCustomers.every((customer) => customer.selected));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
   <div>     <Sidebar/></div>
    <div className="customer-list">
    <div className="header">
    <h1>CUSTOMERS</h1>
    <button className="add-button">Add</button>
  </div>
  
      <table className="customer-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>LOCATION</th>
            <th>PH NO</th>
            <th>SIGNED UP</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((customer) => (
            <tr key={customer.id}>
              <td>
                <input
                  type="checkbox"
                  checked={customer.selected}
                  onChange={() => toggleSelect(customer.id)}
                />
              </td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.location}</td>
              <td>{customer.phone}</td>
              <td>{customer.signed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={currentPage === number ? 'active' : ''}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CustomerList;
