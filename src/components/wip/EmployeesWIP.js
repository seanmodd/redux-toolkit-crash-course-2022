import React, { useState } from 'react';
import { EmployeeService } from '../../services/EmployeeService';

const Employees = () => {
  const [state, setState] = useState({
    employees: EmployeeService.getAllEmployees(),
  });

  const { employees } = state;

  const updateSelected = (empId) => {
    const selectedEmployees = employees.map((employee) => {
      if (employee.id === empId) {
        return {
          ...employee,
          isSelected: !employee.isSelected,
        };
      }
      return employee;
    });
    setState({
      ...state,
      employees: selectedEmployees,
    });
  };

  const employeeList = employees.map((employee) => (
    <li key={employee.id} className="list-group-item">
      <input
        onChange={() => updateSelected(employee.id)}
        type="checkbox"
        className="form-check-input me-2"
      />
      {employee.name}
    </li>
  ));

  const checkmarkedEmployees = employees.map((employee) => (
    <div key={employee.id}>
      {employee.isSelected && (
        <div className="my-2 card">
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Name : <span className="fw-bold">{employee.name}</span>
              </li>
              <li className="list-group-item">
                Email : <span className="fw-bold">{employee.email}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-primary">Employees Missing Redux</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea,
            eos officia ratione reiciendis repellendus sapiente sit sunt
            voluptatem. A accusamus beatae consectetur cum inventore, magni
            quae! Deserunt, facilis, officiis?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              // employees.length > 0 &&
              employeeList
            }
          </ul>
        </div>
        <div className="col-md-6">
          {
            // employees.length > 0 &&
            checkmarkedEmployees
          }
        </div>
      </div>
    </div>
  );
};
export default Employees;
