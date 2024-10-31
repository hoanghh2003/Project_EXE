import { useEffect, useRef, useState } from "react";
// import styles from "./Section.module.css";
import logo from "../../assets/img/logo.png";

// import { useEffect, useRef, useState } from "react";

const Section = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case it's already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex justify-center items-center px-15 py-10 md:w-[1500px] min-h-[300px] transform transition-opacity duration-800 opacity-0 translate-y-0 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-50 bg-[length:200%_200%] animate-gradientAnimation ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6 perspective-[1500px]">
          <img
            className="h-32 max-w-full transition-transform duration-300 ease-in-out animate-floatAnimation hover:scale-105"
            src={logo}
            alt="Company Logo"
          />
        </div>

        {/* Title with Underline Animation */}
        <h2
          className={`text-2xl font-bold text-gray-800 mb-6 relative ${
            isVisible ? "after:scale-x-100" : ""
          }`}
        >
          About Us
          <span className="block w-full h-[3px] bg-blue-500 absolute left-0 bottom-[-5px] scale-x-0 transition-transform duration-500 transform origin-left"></span>
        </h2>

        {/* Description with Typing Animation */}
        <p className="text-gray-600 max-w-[600px] mx-auto leading-relaxed text-base overflow-hidden whitespace-nowrap border-r-2 border-blue-500 animate-typing">
          We are passionate about delivering quality and excellence...
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-transform duration-300 hover:bg-blue-600 transform hover:translate-y-[-2px] shadow-md shadow-blue-300 hover:shadow-lg relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:transition-colors before:duration-400 hover:before:border-blue-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
