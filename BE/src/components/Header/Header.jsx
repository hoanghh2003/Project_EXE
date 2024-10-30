import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../../assets/img/logo.png";


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header
      className={`py-4 fixed top-0 w-full z-50 shadow-lg flex items-center transition duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-800 to-gray-700 text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="leftcontent">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo w-16 h-16 rounded-full"
            />
          </Link>
        </div>
        <nav className="centercontent flex-grow">
          <ul className="flex justify-center gap-8 list-none p-0 m-0">
            <li>
              <Link
                to="/about"
                className="text-white font-medium text-lg transition hover:underline hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white font-medium text-lg transition hover:underline hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-medium text-lg transition hover:underline hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="dark-mode-toggle">
            <input
              type="checkbox"
              id="darkModeSwitch"
              className="hidden"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="darkModeSwitch" className="cursor-pointer">
              <span className="sun-icon">☀️</span>
              <span className="moon-icon">🌙</span>
              <span></span>
            </label>
          </div>
          <div className="rightcontent flex items-center space-x-2">
            <Link
              className="btn1 text-white text-sm px-3 py-1 border border-gray-500 rounded transition hover:bg-blue-500 hover:text-white"
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              className="text-blue-300 text-sm transition hover:text-blue-600"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

