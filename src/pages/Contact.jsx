import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Mail } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Contact() {
 
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted from Home page:", form);
    alert(`Thank you, ${form.name}. Your message has been sent!`);
    setForm({ name: "", email: "", message: "" });
  };

  // Define custom colors using Tailwind arbitrary values
  const accentColorClass = "text-[#e5fa63]";
  const accentBgClass = "bg-[#e5fa63]";
  const accentBgHoverClass = "hover:bg-[#c4d65a]"; // Slightly darker for contrast on hover
  const accentFocusRingClass = "focus:ring-[#e5fa63]";
  const accentFocusBorderClass = "focus:border-[#e5fa63]";


  return (
    // Section background remains gray-900
     <section
  id="contact"
  className="font-alliance bg-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 shadow-2xl">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <div 
            data-aos="fade-right" 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-4">
              Start a conversation about your project today. Tell us about your goals, and we'll show you how we can help.
            </p>
            
            <div 
              className="mt-6 sm:mt-8 space-y-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="flex items-center text-gray-300">
                {/* Replaced text-indigo-400 with accentColorClass */}
                <Mail className={`mr-3 ${accentColorClass} flex-shrink-0`} size={24} />
                <span className="text-sm sm:text-base">Ready to transform your business</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {/* Replaced text-indigo-400 with accentColorClass */}
            <h3 
              className={`text-xl sm:text-2xl font-bold ${accentColorClass} mb-4`}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Quick Inquiry
            </h3>
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
              <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name" 
                // Replaced focus:ring/border-indigo with accent classes
                className={`w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 ${accentFocusRingClass} ${accentFocusBorderClass} text-sm sm:text-base`} 
                required 
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
              <input 
                type="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email" 
                // Replaced focus:ring/border-indigo with accent classes
                className={`w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 ${accentFocusRingClass} ${accentFocusBorderClass} text-sm sm:text-base`} 
                required 
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="600">
              <textarea 
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..." 
                rows="4" 
                // Replaced focus:ring/border-indigo with accent classes
                className={`w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 ${accentFocusRingClass} ${accentFocusBorderClass} text-sm sm:text-base`} 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              // Replaced bg-indigo and hover classes with accent classes, changed text to black for contrast
              className={`w-full ${accentBgClass} text-black font-bold py-3 rounded-lg ${accentBgHoverClass} transition text-sm sm:text-base`}
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

  );
}
