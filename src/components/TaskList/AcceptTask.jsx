import React from "react";
import { motion } from "framer-motion";

const Card1 = ({ cardHeight = "350px" , data}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-start"
    style={{ height: cardHeight }}
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-red-500 font-bold text-lg">{data.category}</h3>
      <h4 className="text-gray-200 text-base">{data.date}</h4>
    </div>
    <h2 className="text-gray-100 text-3xl font-semibold mt-4 mb-2">
      {data.title}
    </h2>
    <p className="text-gray-300 text-base">
      {data.description}
      {/* Record and edit a tutorial on building a responsive React dashboard with TailwindCSS and Framer Motion. */}
    </p>
    <div className="mt-auto flex space-x-3 pt-5">
      <button
        type="button"
        className="flex-1 text-green-400 border border-green-400 bg-transparent text-sm font-semibold py-2 rounded-lg hover:bg-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      >
        Completed
      </button>
      <button
        type="button"
        className="flex-1 text-red-400 border border-red-400 bg-transparent text-sm font-semibold py-2 rounded-lg hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      >
        Failed
      </button>
    </div>
  </motion.div>
);

export default Card1;
