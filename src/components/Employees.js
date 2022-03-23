import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { EmployeeService } from '../services/EmployeeService';
import { updateSelected } from '../redux/features/employees.feature';

const EmployeesRedux = () => {
  const dispatch = useDispatch();

  // get the store data from redux
  const employeeState = useSelector((store) => store.employees);

  const { employees } = employeeState;

  const changeUpdateSelected = (empId) => {
    // dispatch an action
    dispatch(updateSelected(empId));
  };

  const myemployees =
    employees.length > 0 &&
    employees.map((employee) => (
      <li key={employee.id} className="list-group-item">
        <input
          checked={employee.isSelected}
          onChange={() => changeUpdateSelected(employee.id)}
          type="checkbox"
          className="form-check-input me-2"
        />
        {employee.name}
      </li>
    ));

  const employeeschecked =
    employees.length > 0 &&
    employees.map((employee) => (
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
          <p className="h3 text-primary">Employees with Redux</p>
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
          <ul className="list-group">{myemployees}</ul>
        </div>
        <div className="col-md-6">{employeeschecked}</div>
      </div>
    </div>
  );
};
export default EmployeesRedux;
