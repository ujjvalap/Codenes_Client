import React, { useState } from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function HostNavbar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/login"); // Redirect to login after logout
      setIsLoading(false);
    }, 1000); // Simulating logout delay
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="cursor-pointer flex items-center">
            <img
              src="/Logo.png"
              alt="CodeNest"
              className="h-16 w-auto filter drop-shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </Link>

          {/* Navbar Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/dashboard"
              className="hover:bg-indigo-700 px-4 py-2 rounded-md flex items-center text-lg font-semibold transition duration-200 ease-in-out hover:text-yellow-300"
            >
              <FaHome className="mr-2" /> Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="hover:bg-indigo-700 px-4 py-2 rounded-md flex items-center text-lg font-semibold transition duration-200 ease-in-out hover:text-yellow-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loader inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <FaSignOutAlt className="mr-2" /> Logout
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HostNavbar;
