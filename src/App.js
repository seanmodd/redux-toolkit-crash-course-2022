import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CounterRedux from './components/Counter';
import Home from './components/layout/Home';
import NavBar from './components/layout/NavBar';
import EmployeesRedux from './components/Employees';
import UserListRedux from './components/UserList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeesRedux />} />
        <Route path="/counter" element={<CounterRedux />} />
        <Route path="/users" element={<UserListRedux />} />
      </Routes>
    </>
  );
}

export default App;
