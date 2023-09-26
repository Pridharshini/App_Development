import React from 'react';
import '../Pages/CombinedCharts.css';
import '../Pages/StatCards.css';

import '../Pages/Orders.css'
import CombinedCharts from '../Pages/CombinedCharts'; 
import StatCards from '../Pages/StatCards';
import Sidebar from '../Component/Sidebar';


const Overview = () => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
       
      <StatCards />
      <CombinedCharts />
     
     
     
    </div>
  );
};

export default Overview;