import React from 'react'
import Entry from './Component/Entry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Component/Sidebar'
import Sidebar1 from './Component/Sidebar1'
import Signup from './Component/Signup'
import Termsandconditions from './Component/TermsandConditions'
import PrivacyPolicy from './Component/PrivacyPolicy'
import Faq from './Component/Faq'
import CustomerList from './Pages/CustomerList'
import Companies from './Pages/Companies'
import ApprovalPage from './Pages/ApprovalPage'
import StaffDirectory from './Pages/StaffDirectory'
import Overview from './Pages/Overview'
import Production from './Pages/Production'
import MonthlySchedule from './Pages/MonthlySchedule'
import EmployeeCompany from './Pages/EmployeeCompany'
import EmployeeCustomer from './Pages/EmployeeCustomer'
import EmployeeRequest from './Pages/EmployeeRequest'
import Home from './Component/Home'



function App() {
  return (
    <div>
   <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Entry/>}/>
   
    
    
    <Route path='/signup' element={<Signup/>}/>
    
    <Route path='/sidebar' element={<Sidebar/>}/>
    <Route path='/sidebar1' element={<Sidebar1/>}/>
    <Route path='/overview' element={<Overview/>}/>
    <Route path='/terms' element={<Termsandconditions/>}/>
    <Route path='/policy' element={<PrivacyPolicy/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path ="/customer" element ={<CustomerList/>}/>
    <Route path ="/company" element ={<Companies/>}/>
    <Route path ="/approval" element ={<ApprovalPage/>}/>
    <Route path ="/staff" element ={<StaffDirectory/>}/>
    <Route path ="/production" element ={<Production/>}/>
    <Route path ="/schedule" element ={<MonthlySchedule/>}/>
    <Route path ="/organization" element ={<EmployeeCompany/>}/>
    <Route path ="/client" element ={<EmployeeCustomer/>}/>
    <Route path ="/request" element ={<EmployeeRequest/>}/>
    <Route path="/home" element={<Home/>}/>

    
   </Routes>
  
   </BrowserRouter>
      </div>
  )
}

export default App
