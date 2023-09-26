import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, Legend as PieLegend } from 'recharts';
import './CombinedCharts.css';

const barChartData = [
  { month: 'Jan', currentYear: 8000, lastYear: 6000 },
  { month: 'Feb', currentYear: 9000, lastYear: 7000 },
  { month: 'Mar', currentYear: 11000, lastYear: 8000 },
  { month: 'Apr', currentYear: 12000, lastYear: 8500 },
  { month: 'May', currentYear: 10000, lastYear: 7500 },
  { month: 'Jun', currentYear: 10500, lastYear: 7800 },
  { month: 'Jul', currentYear: 9500, lastYear: 7200 },
  { month: 'Aug', currentYear: 8800, lastYear: 6400 },
  { month: 'Sep', currentYear: 9300, lastYear: 7000 },
  { month: 'Oct', currentYear: 10500, lastYear: 7900 },
  { month: 'Nov', currentYear: 11000, lastYear: 8300 },
  { month: 'Dec', currentYear: 11500, lastYear: 8700 },
  // ... rest of your bar chart data
];

const pieChartData = [
  { name: 'Desktop', value: 53 },
  { name: 'Tablet', value: 15 },
  { name: 'Phone', value: 32 },
];

const COLORS = ['#0086FE', '#FFBB78', '#00C49F'];

const CombinedCharts = () => {
  return (
    <div className="combined-charts">
      <div className="bar-chart">
        <h2 className="Bchart-title">Sales Comparison</h2>
        <BarChart width={750} height={350} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="currentYear" fill="#8884d8" name="Current Year" />
          <Bar dataKey="lastYear" fill="#82ca9d" name="Last Year" />
        </BarChart>
      </div>
      <div className="pie-chart">
        <h2 className="Pchart-title">Traffic Source</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <PieLegend align="center" iconType="circle" />
        </PieChart>
      </div>
    </div>
  );
};

export default CombinedCharts;
