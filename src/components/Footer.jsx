import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Footer(){
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const navLinkBaseClasses = "font-medium py-1 border-b-2 border-transparent transition duration-300";

const handleContactClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const servicesSection = document.getElementById("services-section");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const servicesSection = document.getElementById("services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-[#E5FA63]">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} DataSphere. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link to="/" className="hover:text-[#E5FA63] transition">Home</Link>
               <NavLink
            to="/about"
            className= "hover:text-[#E5FA63] transition">
            About Us
          </NavLink>
	    <a
              href="#services-section"
              onClick={handleServicesClick}
              className= "hover:text-[#E5FA63] transition">
              Our Services
            </a>
           <Link
            to="#contact"
            onClick={handleContactClick}
            className= "hover:text-[#E5FA63] transition"
          >Contact Us
          </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}