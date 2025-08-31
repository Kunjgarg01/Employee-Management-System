import React from "react";
import { motion } from "framer-motion";

const DashboardCards = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-60 mt-5">
      
      {/* Card 1 – Lavender pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-rose-800 to-purple-200 text-white p-8 
                  flex flex-col justify-between rounded-2xl shadow-lg m-4"
      >
        <h2 className="text-5xl font-extrabold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">New Tasks</h3>
      </motion.div>

      {/* Card 2 – Sky Blue pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-sky-800 to-sky-200 text-white p-8 
                  flex flex-col justify-between rounded-2xl shadow-lg m-4"
      >
        <h2 className="text-5xl font-extrabold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Completed Tasks</h3>
      </motion.div>

      {/* Card 3 – Mint Green pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-emerald-800 to-emerald-200 text-white p-8 
                  flex flex-col justify-between rounded-2xl shadow-lg m-4"
      >
        <h2 className="text-5xl font-extrabold">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Active Tasks</h3>
      </motion.div>

      {/* Card 4 – Lavender/Light Purple pastel */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-amber-800 to-yellow-500 text-white p-8
          flex flex-col justify-between rounded-2xl shadow-lg m-4">

        <h2 className="text-5xl font-extrabold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium mt-6 opacity-90">Failed Tasks</h3>
      </motion.div>

    </div>
  );
};

export default DashboardCards;
