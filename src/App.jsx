import React, { useEffect } from 'react'
import Login from './components/Auth/Login.jsx'
import Header from './components/Others/Header.jsx'
import TaskListNumber from './components/Others/TaskListNumber.jsx'
import TaskDets from './components/TaskList/TaskDets.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import CreateTask from './components/Others/createTask.jsx'
import { setLocalStorage } from './utils/LocalStorage.jsx'

const App = () => {

  useEffect(() => {
    setLocalStorage();
  },); // Runs only once on mount

  return (
    <>
      <Login />
      {/* <Header /> */}
      {/* <TaskListNumber /> */}
      {/* <TaskDets /> */}
      {/* <AdminDashboard /> */}
      {/* <CreateTask /> */}
    </>
  )
}

export default App
