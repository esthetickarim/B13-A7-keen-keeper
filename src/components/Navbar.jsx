import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart } from "lucide-react";
import logo from "../assets/images/logo.png"; // ✅ CORRECT

export default function Navbar() {
  return (
    <div className="bg-[#f5f7fa] border-b border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm">
      
      {/* 🔹 Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="KeenKeeper Logo"
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* 🔹 Nav Links */}
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm ${
              isActive
                ? "bg-[#22c55e] text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          <Home size={14} /> Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm ${
              isActive
                ? "bg-[#22c55e] text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          <Clock size={14} /> Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm ${
              isActive
                ? "bg-[#22c55e] text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          <BarChart size={14} /> Stats
        </NavLink>
      </div>
    </div>
  );
}