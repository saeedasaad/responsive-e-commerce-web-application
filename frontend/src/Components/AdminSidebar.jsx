import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

export default function AdminSidebar() {
  const linkStyle =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200";

  const activeStyle = "bg-[#f0eeed] text-black font-semibold";
  const inactiveStyle = "text-gray-300 hover:bg-gray-800 hover:text-white";

  return (
    <aside className="w-64 bg-black text-white flex flex-col min-h-screen justify-between">

      <div>


        <div className="p-6 flex items-center gap-2 border-b border-gray-500">
          <Link to="/">
            <img
              src={assets.wLogo}
              alt="Logo"
              className="w-24 object-contain"
            />
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaUsers /> Users
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaBox /> Products
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaCog /> Settings
          </NavLink>
        </nav>
      </div>


      <div className="p-4 border-t border-gray-700">
        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white hover:text-black transition"
        >
          <FaSignOutAlt /> Logout
        </NavLink>
      </div>
    </aside>
  );
}
