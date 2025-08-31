import React from "react";
import { motion } from "framer-motion";

const Card1 = ({ cardHeight = "350px" ,data}) => (
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
      {/* Record and edit a tutorial on building a responsive React dashboard with TailwindCSS and Framer Motion. */}
      {data.description}
    </p>
    <div className="mt-auto pt-5">
      <span className="inline-block w-full text-center text-red-400 border border-red-400 rounded-lg bg-red-500/10 py-2 text-sm font-semibold select-none">
        Failed
      </span>
    </div>
  </motion.div>
);

export default Card1;
