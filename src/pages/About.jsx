import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Target, Eye } from "lucide-react"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "../pages/Contact";


export default function About(){
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Define custom colors using Tailwind arbitrary values
  const accentColorClass = "text-[#e5fa63]";
  const accentBgClass = "bg-[#e5fa63]";
  const accentBorderClass = "border-[#e5fa63]";
  const textColorClass = "text-gray-400"; // General text color for dark background
  const cardBgClass = "bg-gray-900"; // Card background color

  return (
<>
    {/* Main container background is now dark gray/black */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-white"> 
      
      {/* Hero Header - Responsive */}
      <header className="text-center mb-10 sm:mb-16" data-aos="fade-down">
        {/* Changed text-indigo-500 to accentColorClass */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-black`}>
          DataSphere
        </h1>
        {/* Changed text-gray-600 to textColorClass */}
        <p className={`text-lg sm:text-xl lg:text-2xl ${textColorClass} max-w-3xl mx-auto px-4`}>
          Where Technology Meets Business Vision
        </p>
      </header>

      {/* Our Story Section - Responsive */}
      <section 
        // Changed bg-gray-50 to cardBgClass and updated text colors
        className={`${cardBgClass} p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg mb-10 sm:mb-16 border border-gray-700`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white flex items-center flex-wrap">
          {/* Changed text-black icons to accentColorClass */}
          <Zap className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 ${accentColorClass} flex-shrink-0`} /> 
          {/* Changed text-indigo-500 to accentColorClass */}
          <span className={accentColorClass}>Our Story</span>
        </h2>
        {/* Changed text-gray-700 to textColorClass */}
        <div className={`space-y-4 sm:space-y-6 text-base sm:text-lg ${textColorClass}`}>
          <p>
            Since 2023, DataSphere is a technology-driven firm specializing in ERP, SAP, and Web Development solutions. We partner with organizations to streamline business processes, enhance operational efficiency, and enable digital transformation through intelligent and scalable technologies.
          </p>
          <p>
            With a commitment to excellence and innovation, DataSphere delivers end-to-end consulting services that align technology with business goals. Our team of experienced professionals combines deep domain expertise with a results-oriented approach to ensure that every solution we deliver adds measurable value to our clients.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Responsive Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Mission Card */}
        <div 
          // Changed border-indigo-600, bg-white, and text colors
          className={`${cardBgClass} p-6 sm:p-8 lg:p-10 border-t-4 ${accentBorderClass} shadow-xl rounded-xl border border-gray-700`}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          {/* Changed icon color to accentColorClass */}
          <Target className={`w-7 h-7 sm:w-8 sm:h-8 ${accentColorClass} mb-3 sm:mb-4`} />
          {/* Changed text-indigo-500 to accentColorClass */}
          <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${accentColorClass}`}>Mission</h3>
          {/* Changed text-gray-700 to textColorClass */}
          <p className={`text-sm sm:text-base ${textColorClass} leading-relaxed`}>
            To deliver strategic, data-driven, and sustainable technology solutions that transform business operations, optimize performance, and foster innovation helping our clients achieve measurable success in their digital journey.
          </p>
        </div>
        
        {/* Vision Card */}
        <div 
          // Changed border-indigo-600, bg-white, and text colors
          className={`${cardBgClass} p-6 sm:p-8 lg:p-10 border-t-4 ${accentBorderClass} shadow-xl rounded-xl border border-gray-700`}
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Changed icon color to accentColorClass */}
          <Eye className={`w-7 h-7 sm:w-8 sm:h-8 ${accentColorClass} mb-3 sm:mb-4`} />
           {/* Changed text-indigo-500 to accentColorClass */}
          <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${accentColorClass}`}>Vision</h3>
          {/* Changed text-gray-700 to textColorClass */}
          <p className={`text-sm sm:text-base ${textColorClass} leading-relaxed`}>
            To be a global leader in technology consulting, renowned for driving digital transformation through innovation, integrity, and excellence empowering businesses to realize their full potential in the digital era.
          </p>
        </div>

      </section>

    </div>
{/* Contact component was already using the dark theme from the previous update */}
<Contact />
</>
  );
}
