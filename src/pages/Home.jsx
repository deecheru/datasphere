import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Mail } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { services } from '../constants/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "../pages/Contact";

const slides = [
  { id: 1, title: "Transform Systems Seamlessly", subtitle: "Unlock your organization's potential with our consultancy. We optimize systems for seamless integration and enhanced performance in a future-oriented enterprise.", image: "images/bg1.svg" },
  { id: 2, title: "Agility That Drives Success", subtitle: "Equip your groups with customized agile approaches, nurturing creativity and flexibility to achieve enduring expansion and industry dominance.", image: "images/bg2.svg" },
  { id: 3, title: "Insightful Solutions, Enduring Results",subtitle: "Develop customized approaches to tackle your most pressing issues, offering guidance and vision for enduring prosperity and long-term achievement.", image: "images/bg3.svg" },
];

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
  // A slightly darker shade for hover effect to provide contrast
  const accentBgHoverClass = "hover:bg-[#c4d65a]"; 

  return (
    <>
      {/* Hero Section - Responsive */}
	
      <section>
  <Swiper
    modules={[Pagination, Autoplay]}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 8000, disableOnInteraction: false }}
    pagination={{ 
      clickable: true, 
      el: '.swiper-pagination-custom', 
      bulletClass: 'swiper-pagination-bullet bg-white !w-8 sm:!w-12 !h-1.5 sm:!h-2 rounded-full !opacity-50 transition-all duration-300', 
      bulletActiveClass: '!opacity-100 !w-12 sm:!w-20' 
    }}
    className="h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden"
  >
    {slides.map(slide => (
      <SwiperSlide key={slide.id}>

        <div 
          className="w-full h-full relative flex flex-col justify-center items-start text-left px-6 sm:px-12 md:px-20"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              {slide.title}
            </h3>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
              {slide.subtitle}
            </p>
          </div>

        </div>

      </SwiperSlide>
    ))}

    {/* Pagination */}
    <div className="swiper-pagination-custom absolute bottom-4 sm:bottom-10 left-0 right-0 z-20 flex justify-center space-x-2"></div>
  </Swiper>
</section>


	

      {/* About Section - Responsive */}
      {/* Changed bg-gray-50 dark:bg-gray-900 to bg-gray-900 for black combination */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div 
              className="w-full md:w-1/2 flex justify-center"
              data-aos="fade-right" 
              data-aos-duration="1000"
            >
              <img 
                src="/images/DATASPHERE.svg" 
                alt="About Us DataSphere" 
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain"
              />
            </div>

            <div 
              className="w-full md:w-1/2 text-center md:text-left"
              data-aos="fade-left" 
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {/* Changed text-indigo-600 dark:text-white to accentColorClass */}
              <h2 className={`text-3xl sm:text-4xl font-extrabold ${accentColorClass} mb-4 sm:mb-6`}>
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-8 leading-relaxed">
                DataSphere is a modern consulting firm specializing in building scalable, future-ready digital ecosystems for organizations of all sizes. We bring deep expertise across strategy, engineering, cloud modernization, cybersecurity, and enterprise systems.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-10 leading-relaxed">
                Whether it's transforming operations, integrating critical systems, or enhancing product quality, we partner with you to accelerate growth and long-term success.
              </p>
              
              <Link 
                to="/about"
                // Replaced bg-indigo-600 and hover classes with accent color classes
                className={`inline-flex items-center text-base sm:text-lg font-semibold 
                           text-black ${accentBgClass} px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg 
                           shadow-lg ${accentBgHoverClass} transition duration-300 
                           ease-in-out transform hover:-translate-y-0.5`}
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive */}
      {/* Changed section background color to match dark theme */}
      <section id="services-section" className="py-12 sm:py-16 text-center px-4 sm:px-6 bg-gray-800">
        {/* Changed text-indigo-500 to accentColorClass */}
        <h2 
          className={`text-3xl sm:text-4xl font-extrabold ${accentColorClass} mb-8 sm:mb-12`}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Our Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, index) => (
            <Link 
              key={s.id} 
              to={`/services/${s.id}`} 
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
              // Changed bg-white border border-gray-200 to dark mode equivalents
              className="block bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div>
                {/* Changed text-indigo-500 to accentColorClass */}
                <h3 className={`text-xl sm:text-2xl font-semibold ${accentColorClass} mb-2`}>{s.title}</h3> 
                <p className="text-sm sm:text-base text-gray-400">{s.description}</p>
                {/* Changed text-indigo-600 to accentColorClass */}
                <span className={`inline-block mt-3 sm:mt-4 text-sm font-medium ${accentColorClass} group-hover:text-[#c4d65a] transition`}>
                  Explore service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section - Responsive */}
	<Contact />
     
    </>
  );
}
