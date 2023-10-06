package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

	@Autowired
    private  EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(Employee Employee) {
        return employeeRepository.save(Employee);
    }

    public Employee updateEmployee(int id, Employee updatedEmployee) {
        Optional<Employee> existingEmployeeOptional = employeeRepository.findById(id);

        if (existingEmployeeOptional.isPresent()) {
            Employee existingEmployee = existingEmployeeOptional.get();
            existingEmployee.setEmpName(updatedEmployee.getEmpName());
            existingEmployee.setGender(updatedEmployee.getGender());
            existingEmployee.setEmail(updatedEmployee.getEmail());
            existingEmployee.setContactnum(updatedEmployee.getContactnum());
            existingEmployee.setAddress(updatedEmployee.getAddress());
            existingEmployee.setAge(updatedEmployee.getAge());
            existingEmployee.setDob(updatedEmployee.getDob());

            return employeeRepository.save(existingEmployee);
        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }

    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);
    }
}
