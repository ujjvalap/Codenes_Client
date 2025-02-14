import React from "react";
import { Bell } from "lucide-react"; // Notification Icon

const Header = ({ username }) => {
  return (
    <header className="bg-[#2882dd] text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Welcome, {username}!</h1>
        <button className="flex items-center space-x-2 hover:text-gray-300 transition">
          <Bell size={20} />
          <span>Notifications</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
