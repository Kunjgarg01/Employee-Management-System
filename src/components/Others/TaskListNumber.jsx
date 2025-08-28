import React from "react";
import { motion } from "framer-motion";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-60 mt-5">
      
      {/* Card 1 – Lavender pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-rose-800 to-purple-200 text-white p-8 
                   flex flex-col justify-between rounded-2xl shadow-lg m-4"
      >
        <h2 className="text-5xl font-extrabold">24</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Tasks Completed</h3>
      </motion.div>

      {/* Card 2 – Sky Blue pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-sky-800 to-sky-200 text-white p-8 
                   flex flex-col justify-between rounded-2xl shadow-lg m-4"
      >
        <h2 className="text-5xl font-extrabold">12</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Pending Reviews</h3>
      </motion.div>

      {/* Card 3 – Mint Green pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-emerald-800 to-emerald-200 text-white p-8 
                   flex flex-col justify-between rounded-2xl shadow-lg m-4"
      >
        <h2 className="text-5xl font-extrabold">8</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Active Projects</h3>
      </motion.div>

      {/* Card 4 – Lavender/Light Purple pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
       className="bg-gradient-to-br from-amber-800 to-yellow-200 text-white p-8
           flex flex-col justify-between rounded-2xl shadow-lg m-4">

        <h2 className="text-5xl font-extrabold">5</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Team Members</h3>
      </motion.div>

    </div>
  );
};

export default DashboardCards;
