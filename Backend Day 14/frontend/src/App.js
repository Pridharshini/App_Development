import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import AdminNavbar from './Pages/AdminNavbar';
import AdminSideBar from './Pages/AdminSideBar';
import AdminDashboard from './Pages/AdminDashboard';
import EmployeeDetails from './Pages/EmployeeDetails';
import AddEmployee from './Pages/AddEmployee';
import UpdateEmployee from './Pages/UpdateEmployee';
import ScheduleDetails from './Pages/ScheduleDetails';
import Terms from './Pages/Terms';
import Faq from './Pages/Frequently';
import Frequently from './Pages/Frequently';
import EmployeeDasboard from './Pages/EmployeeDashboard';


function App() {
  return (
    <div>
   <BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
 <Route path="/admin" element={<AdminDashboard/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/employee' element={<EmployeeDetails/>}/>
 <Route path='/addemp' element={<AddEmployee/>}/>
 <Route path='/updateemp/:empId' element={<UpdateEmployee/>}/>
 <Route path='/scheduledetails' element={<ScheduleDetails/>}/>
 <Route path='/terms' element={<Terms/>}/>
 <Route path='/faq' element={<Frequently/>}/>
 <Route path='/users' element={<EmployeeDasboard/>}/>



</Routes>

</BrowserRouter> 
    </div>
  )
}


export default App