// Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center text-white">
            <div className="text-green-500 mr-2">
              {/* Logo goes here, e.g. an SVG or image tag */}
              <span className="sr-only">Company Logo</span>
            </div>
            <span className="font-bold text-2xl">lentio blog</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/about" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/projects" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            {/* ... additional links ... */}
          </div>

          {/* Profile icon with notification badge and CTA buttons */}
          <div className="flex items-center">
            {/* Notification Icon */}
            <div className="relative">
              <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 text-white focus:outline-none">
                <span className="sr-only">User menu</span>
                {/* Profile icon goes here, e.g., an SVG or image */}
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  
                </svg>
                
              </button>
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400" />
            </div>

            {/* Sign In Button */}
            <Link to="/sign-in" className="text-white hover:bg-green-500 px-3 py-2 ml-4 rounded-md text-sm font-medium">
              Sign in
            </Link>

            {/* Call to Action Button */}
            <Link to="/sign-up" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 ml-4 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Dropdown Menu */}
      <div className={`${isProfileMenuOpen ? 'block' : 'hidden'} absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`}>
        <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-500">
          Dashboard
        </Link>
        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-500">
          Settings
        </Link>
        {/* ... other profile links ... */}
      </div>
    </nav>
  );
};

export default Navbar;
