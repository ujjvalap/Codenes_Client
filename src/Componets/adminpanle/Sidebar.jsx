import React from 'react';
import { FiHome, FiBook, FiFileText, FiUsers, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="bg-[#003366] w-64 min-h-screen p-4 fixed left-0 top-0">
      <div className="mb-8">
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto"></div>
      </div>
      
      <nav className="space-y-2">
        <a href="#" className="flex items-center text-[#D3D3D3] hover:bg-[#0066CC] p-2 rounded">
          <FiHome className="mr-2" /> Dashboard
        </a>
        <a href="#" className="flex items-center text-[#D3D3D3] hover:bg-[#0066CC] p-2 rounded">
          <FiUsers className="mr-2" /> Students
        </a>
        <a href="#" className="flex items-center text-[#D3D3D3] hover:bg-[#0066CC] p-2 rounded">
          <FiBook className="mr-2" /> Subjects
        </a>
        <a href="#" className="flex items-center text-[#D3D3D3] hover:bg-[#0066CC] p-2 rounded">
          <FiFileText className="mr-2" /> Questions
        </a>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button 
          className="w-full flex items-center text-[#D3D3D3] hover:bg-red-600 p-2 rounded"
          onClick={() => {
            if(window.confirm('Are you sure you want to logout?')) {
              // Logout logic
            }
          }}
        >
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;