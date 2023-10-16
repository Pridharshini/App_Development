import React from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import EmployeeSidebar from './EmployeeSidebar'

function EmployeeDasboard() {
    return (
        <div>
               <div >
                <EmployeeNavbar/>
                </div>  
             
              <div >
            <EmployeeSidebar/>
            </div> 
           
            
        </div>
      )
    }

export default EmployeeDasboard