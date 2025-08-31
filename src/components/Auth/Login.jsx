import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function Login({ handleLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const employeeEmails = [
    "employee1@example.com",
    "employee2@example.com",
    "employee3@example.com",
    "employee4@example.com",
    "employee5@example.com",
    "admin@example.com",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", email, password);
    handleLogin(email, password);  // Removed name from here
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4
      bg-gradient-to-r from-[#cdafe6] via-[#5191df] via-[#62d0a6]  via-[#ae4b5a] to-[#f5da90]
      animate-[gradientShift_40s_ease_infinite] bg-[length:1000%_1000%]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email Input with Datalist */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-bold text-gray-100 mb-2"
            >
              E-mail
            </label>
            <input
              list="emailSuggestions"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter or select your e-mail"
              className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20
              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400
              placeholder-gray-300 transition-all duration-300"
            />
            <datalist id="emailSuggestions">
              {employeeEmails.map((email, idx) => (
                <option key={idx} value={email} />
              ))}
            </datalist>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-bold text-gray-100 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder=".....123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20
                focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400
                placeholder-gray-300 pr-10 transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-300 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 
            bg-cyan-500/80 hover:bg-sky-500 text-white font-semibold py-2 rounded-xl 
            shadow-lg shadow-blue-500/30 transition-all duration-300"
          >
            <LogIn size={18} />
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
