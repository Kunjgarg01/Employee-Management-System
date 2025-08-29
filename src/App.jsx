import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import Header from './components/Others/Header.jsx'
import TaskListNumber from './components/Others/TaskListNumber.jsx'
import TaskDets from './components/TaskList/TaskDets.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
// import CreateTask from './components/Others/createTask.jsx'
import { setLocalStorage } from './utils/LocalStorage.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'

const App = () => {

  useEffect(() => {
    setLocalStorage();
  }, []);

  const [user, setUser] = useState("");

  const handleLogin = (email,password) => {
    if(email === "admin@example.com" && password === "123"){
      setUser("admin"); // fix: use lowercase to match conditional rendering
      console.log("Admin Logged In");
    }
    else if(email === "employee1@example.com" && password === "123"){
      setUser("employee"); // fix: use lowercase to match conditional rendering
      console.log("employee Logged In");
    }
    else{
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard /> : ''}
      {/* <Header /> */}
      {/* <TaskListNumber /> */}
      {/* <TaskDets /> */}
      {/* <AdminDashboard /> */}
      {/* <CreateTask /> */}
      {/* <EmployeeDashboard /> */}
    </>
  )
}

export default App
