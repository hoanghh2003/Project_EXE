import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("text-white", darkMode);
    document.body.classList.toggle("bg-white", !darkMode);
    document.body.classList.toggle("text-black", !darkMode);
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow-lg flex items-center transition duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-gray-800 to-gray-700 text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-0 py-2.5">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo w-16 h-16 rounded-full" />
        </Link>

        <nav className="flex-grow flex justify-center gap-8">
          <Link
            to="/about"
            className="text-lg font-medium transition hover:underline hover:text-blue-400"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium transition hover:underline hover:text-blue-400"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium transition hover:underline hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative inline-flex items-center">
            <input
              type="checkbox"
              id="darkModeSwitch"
              className="hidden"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label
              htmlFor="darkModeSwitch"
              className="flex items-center bg-gray-800 rounded-full w-14 h-7 p-0 cursor-pointer transition"
            >
              <span
                className={`pl-2 text-xs ${
                  darkMode ? "opacity-100" : "opacity-0"
                }`}
                role="img"
                aria-label="Sun"
              >
                ☀️
              </span>
              <span
                className={`pl-2 text-xs ${
                  darkMode ? "opacity-0" : "opacity-100"
                }`}
                role="img"
                aria-label="Moon"
              >
                🌙
              </span>
              <span
                className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white transform transition ${
                  darkMode ? "translate-x-7" : "translate-x-0"
                }`}
              ></span>
            </label>
          </div>
          <div className="absolute top-0 right-11">
            <Link
              to="/signup"
              className="px-8 py-0 border-r border-black text-sm transition text-blue-600"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-sm transition hover:text-blue-600"
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
