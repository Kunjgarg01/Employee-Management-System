import React from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-transparent">
      <div
        className="max-w-8xl mx-auto flex items-center justify-between py-6 px-8
                   backdrop-blur-md bg-white/10 rounded-xl shadow-sm"
      >
        {/* Animated Title */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold leading-tight flex flex-col gap-1 text-white"
        >
          <span>Hello</span>
          <span className="text-yellow-300 flex items-center gap-2">
            Kunj
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </span>
        </motion.div>

        {/* Very Dark Logout Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-5 py-2
                     bg-red-400 text-white rounded-xl shadow-lg
                     hover:bg-red-700 active:bg-gray-700
                     transition-colors duration-300 font-medium"
        >
          <LogOut size={18} />
          Log Out
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
