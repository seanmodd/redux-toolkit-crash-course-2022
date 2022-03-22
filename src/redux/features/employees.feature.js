import { createSlice } from '@reduxjs/toolkit';
import { EmployeeService } from '../../services/EmployeeService';

const initialState = {
  employees: EmployeeService.getAllEmployees(),
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        }
        return employee;
      });
    },
  },
});
export const { updateSelected } = employeeSlice.actions;
export default employeeSlice.reducer;
