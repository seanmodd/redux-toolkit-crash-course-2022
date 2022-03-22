import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/layout/Home';
import NavBar from './components/layout/NavBar';
import Counter from './components/missing/CounterMissing';
import Employees from './components/missing/EmployeesMissing';
import UserList from './components/missing/UserListMissing';
// import Counter from './components/Counter';
// import Employees from './components/Employees';
// import UserList from './components/UserList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
