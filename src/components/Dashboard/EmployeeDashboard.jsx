import React from 'react'
import Header from '../Others/Header'
// import TaskList from '../TaskList/TaskDets'
import TaskListNumber from '../Others/TaskListNumber'
import TaskDets from '../TaskList/TaskDets'
const EmployeeDashboard = () => {
  return (
    <>
    <Header/>
    <TaskListNumber/>
    <TaskDets/>
    </>
  )
}

export default EmployeeDashboard