import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login.jsx';
import Header from './components/Others/Header.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import { setLocalStorage } from './utils/LocalStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null); // 'admin' | 'employee' | null
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();

    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (savedUser) {
      const isAdmin = savedUser.email === "admin@example.com";
      setUser(isAdmin ? "admin" : "employee");

      if (!isAdmin) {
        // Refresh employee data from latest localStorage (after task assignment)
        const updatedEmp = userData?.employees?.find(emp => emp.email === savedUser.email);
        setLoggedInUserData(updatedEmp || savedUser);
      } else {
        setLoggedInUserData(savedUser);
      }
    }
  }, [authData]);

  // ✅ Handle login (employee or admin)
  const handleLogin = (email, password) => {
    if (authData) {
      // Admin login
      const adminUser = authData.admin.find(
        (a) => a.email === email && a.password === password
      );
      if (adminUser) {
        setUser("admin");
        setLoggedInUserData(adminUser);
        localStorage.setItem("currentUser", JSON.stringify(adminUser));
        console.log("Admin Logged In");
        return;
      }

      // Employee login
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("currentUser", JSON.stringify(employee));
        console.log("Employee Logged In");
        return;
      }
    }

    alert("Invalid Credentials");
  };

  // ✅ Handle logout

  
  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("currentUser");
    console.log("User Logged Out");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <>
          {/* <Header handleLogout={handleLogout} /> */}
          <AdminDashboard data={LoggedInUserData} handleLogout={handleLogout} />
        </>
      ) : user === 'employee' ? (
        <>
          {/* <Header handleLogout={handleLogout} /> */}
          <EmployeeDashboard data={LoggedInUserData} handleLogout={handleLogout} />
        </>
      ) : null}
    </>
  );
};

export default App;
