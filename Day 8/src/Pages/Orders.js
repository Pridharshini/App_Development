// orders.js

import React from 'react';
import './Orders.css'; // Import your CSS file

function Orders() {
  const ordersData = [
    {
      order: 'DEV1099',
      customer: 'Anika Das ',
      date: '24/09/2023',
      status: 'PENDING',
    },
    {
        order: 'DEV1098',
        customer: 'Neeta Kapoor',
        date: '24/09/2023',
        status: 'DELIVERED',
      },
      {
        order: 'DEV1097',
        customer: 'Anju Nair',
        date: '24/09/2023',
        status: 'REFUNDED',
      },
      {
        order: 'DEV1096',
        customer: 'Alok Singh',
        date: '23/09/2023',
        status: 'DELIVERED',
      },
      {
        order: 'DEV1095',
        customer: 'Karthik Subramanian',
        date: '23/09/2023',
        status: 'DELIVERED',
      },
      {
        order: 'DEV1094',
        customer: 'Meena Raman',
        date: '22/09/2023',
        status: 'PENDING',
      },
      {
        order: 'DEV1093',
        customer: 'Anu Raghavan',
        date: '22/09/2023',
        status: 'DELIVERED',
      },
      {
        order: 'DEV1092',
        customer: 'Divyanka Singh',
        date: '22/09/2023',
        status: 'REFUNDED',
      },
      {
        order: 'DEV1091',
        customer: 'Senthil Pillai',
        date: '21/09/2023',
        status: 'PENDING',
      },
      {
        order: 'DEV1090',
        customer: 'Nithya Menon',
        date: '21/09/2023',
        status: 'DELIVERED',
      },
      {
        order: 'DEV1089',
        customer: 'Indira Mukherjee',
        date: '21/09/2023',
        status: 'REFUNDED',
      },
      {
        order: 'DEV1088',
        customer: 'Divya Sridhar',
        date: '20/09/2023',
        status: 'DELIVERED',
      },
      
  ];

  return (
    <div className="container">
      <h1>Latest Orders</h1>
      <div className="table">
        <div className="row header">
          <div className="cell">ORDER</div>
          <div className="cell">CUSTOMER</div>
          <div className="cell">DATE</div>
          <div className="cell">STATUS</div>
        </div>
        {ordersData.map((order, index) => (
         <div className={`row ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
            <div className="cell">{order.order}</div>
            <div className="cell">{order.customer}</div>
            <div className="cell">{order.date}</div>
          <div className={`cell ${getStatusClass(order.status)}`}>{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'status-pending';
    case 'delivered':
      return 'status-delivered';
    case 'refunded':
      return 'status-refunded';
    default:
      return '';
  }
}

export default Orders;
