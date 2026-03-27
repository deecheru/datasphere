import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from '../constants/Services';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Define custom accent color related classes using the exact hex code
  const accentColorClass = "text-[#e5fa63]";
  const accentBorderClass = "border-[#e5fa63]";
  const accentHoverColorClass = "hover:text-[#e5fa63]";
  const accentHoverBorderClass = "hover:border-[#e5fa63]";
  const accentBgColorClass = "bg-[#e5fa63]";


  const navLinkBaseClasses = "font-medium py-1 border-b-2 border-transparent transition duration-300";
  const isServicesActive = location.pathname.startsWith("/services");

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
    <header className="bg-black border-b border-gray-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 h-16 sm:h-20 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="cursor-pointer flex-shrink-0">
          <img
            src="/images/DATASPHERE.svg"
            alt="Logo"
            className="h-20 sm:h-12 lg:h-30 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${navLinkBaseClasses} ${accentColorClass} ${accentBorderClass}`
                : `${navLinkBaseClasses} text-gray-400 ${accentHoverColorClass} ${accentHoverBorderClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${navLinkBaseClasses} ${accentColorClass} ${accentBorderClass}`
                : `${navLinkBaseClasses} text-gray-400 ${accentHoverColorClass} ${accentHoverBorderClass}`
            }
          >
            About Us
          </NavLink>

          {/* Desktop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#services-section"
              onClick={handleServicesClick}
              className={`flex items-center cursor-pointer ${navLinkBaseClasses} ${
                isServicesActive || isDropdownOpen
                  ? `${accentColorClass} ${accentBorderClass}`
                  : `text-gray-400 ${accentHoverColorClass} ${accentHoverBorderClass}`
              }`}
            >
              Our Services
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? `${accentColorClass} rotate-180` : "text-gray-400"
                }`}
              />
            </a>

            {isDropdownOpen && (
              <div className="absolute left-1/2 top-full pt-2 w-[520px] -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                <div className="grid grid-cols-2 gap-x-4 py-3">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className={`px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 ${accentHoverColorClass} transition`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {/* This line was targeting indigo-400 previously: */}
                      <div className={`font-semibold ${accentColorClass}`}>{service.title}</div>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-2">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={handleContactClick}
            className={`${navLinkBaseClasses} text-gray-400 ${accentHoverColorClass} ${accentHoverBorderClass} cursor-pointer`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          <nav className="px-4 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                // This block was using bg-indigo-600 previously:
                `block py-2 px-4 rounded ${
                  isActive
                    ? `${accentBgColorClass} text-gray-900 font-semibold`
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                 // This block was using bg-indigo-600 previously:
                `block py-2 px-4 rounded ${
                  isActive
                    ? `${accentBgColorClass} text-gray-900 font-semibold`
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-gray-800 rounded"
              >
                Our Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      // This link was using text-indigo-400 previously:
                      className={`block py-2 px-4 text-sm ${accentColorClass} hover:bg-gray-800 rounded`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={handleContactClick}
              className="block py-2 px-4 text-gray-300 hover:bg-gray-800 rounded"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
