import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-800">TeamPortfolio</span>
              <p className="text-xs text-gray-500">Building amazing things together</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#team" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Team
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;  