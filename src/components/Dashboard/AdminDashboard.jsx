import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "../Others/Header.jsx";
import CreateTask from "../Others/CreateTask.jsx";

const AdminPanel = ({ handleLogout ,data}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignedTo: "",
    category: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", task);
    alert("Task Created Successfully!");
    setTask({
      title: "",
      description: "",
      date: "",
      assignedTo: "",
      category: "",
    });
  };

  return (
    <>
      <Header handleLogout={handleLogout} data={data}/>

      <div className="max-w-8xl mx-auto mt-1 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
        {/* 2 Column Layout */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-44 mr-4 ml-4"
          onSubmit={handleSubmit}
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-4">
            {/* Task Title */}
            <div className="flex flex-col">
              <label className="text-gray-200 font-semibold mb-1">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter task title"
                required
              />
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-gray-200 font-semibold mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={task.date}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Assigned To */}
            <div className="flex flex-col">
              <label className="text-gray-200 font-semibold mb-1">
                Assigned To
              </label>
              <input
                type="text"
                name="assignedTo"
                value={task.assignedTo}
                onChange={handleChange}
                className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter assignee"
                required
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-gray-200 font-semibold mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={task.category}
                onChange={handleChange}
                placeholder="Design, Development, Marketing..."
                className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col space-y-4">
            {/* Description */}
            <div className="flex flex-col flex-1">
              <label className="text-gray-200 font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                rows="7"
                className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-1"
                placeholder="Enter task description"
                required
              />
            </div>

            {/* Create Task Button */}
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.02 }}
              transition={{ type: "keyframes", stiffness: 300 }}
              className="w-full bg-gradient-to-br from-sky-700 to-purple-300 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-colors"
            >
              Create Task
            </motion.button>
          </div>
        </form>
      </div>

      <CreateTask />
    </>
  );
};

export default AdminPanel;
