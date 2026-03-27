import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Target, Zap, Users, TrendingUp } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Comprehensive service data with detailed information
const SERVICE_DATA = {
  Advisory: {
    title: "Strategic IT Advisory",
    tagline: "Transform Your IT Strategy into Business Success",
    description: "Maximize your ROI with our strategic Advisory service. We help you modernize systems and streamline operations for greater efficiency. Get expert guidance on governance and risk management to secure your assets and drive measurable business value.",
    image: "/images/advisory.jpg",
    
    overview: "Our Strategic IT Advisory services provide comprehensive guidance to align your technology initiatives with business objectives. We help organizations navigate digital transformation, optimize IT investments, and build resilient technology strategies that drive competitive advantage.",
    
    keyBenefits: [
      "Strategic alignment of IT with business goals",
      "Optimized technology investments and ROI",
      "Risk mitigation and compliance management",
      "Accelerated digital transformation",
      "Enhanced operational efficiency",
      "Future-proof technology roadmaps"
    ],
    
    services: [
      {
        title: "IT Strategy & Planning",
        description: "Develop comprehensive IT strategies aligned with your business vision and market dynamics."
      },
      {
        title: "Digital Transformation",
        description: "Guide your organization through digital evolution with proven methodologies and best practices."
      },
      {
        title: "Technology Roadmapping",
        description: "Create clear, actionable technology roadmaps that balance innovation with pragmatic implementation."
      },
      {
        title: "IT Governance & Compliance",
        description: "Establish robust governance frameworks and ensure compliance with industry regulations."
      },
      {
        title: "Vendor Management",
        description: "Optimize vendor relationships and technology partnerships for maximum value."
      },
      {
        title: "Risk Assessment",
        description: "Identify, assess, and mitigate technology risks to protect your business assets."
      }
    ],
    
    process: [
      { 
        step: "Discovery & Analysis", 
        description: "Understand your current IT landscape, challenges, and business objectives through thorough discovery and evaluation." 
      },
      { 
        step: "Strategy & Roadmap", 
        description: "Develop a comprehensive IT strategy and detailed implementation roadmap with clear milestones and goals." 
      },
      { 
        step: "Execution & Optimization", 
        description: "Provide ongoing guidance and support during implementation while continuously optimizing the strategy for maximum business value." 
      }
    ],
    
    industries: ["Financial Services", "Healthcare", "Technology", "Government"]
  },
  
  Agile: {
    title: "Agile Product Development",
    tagline: "Accelerate Innovation with Agile Excellence",
    description: "Accelerate success with our professional Agile Project Management consulting. We specialize in implementing effective Agile practices that increase transparency and stakeholder satisfaction. Get measurable results and a clear path to sustainable growth.",
    image: "/images/agile.jpg",
    
    overview: "Our Agile Product Development services empower teams to deliver high-quality products faster and more efficiently. We combine Scrum, Kanban, and modern agile practices to create adaptive development processes that respond to change and maximize business value.",
    
    keyBenefits: [
      "Faster time-to-market for products",
      "Improved product quality and user satisfaction",
      "Enhanced team collaboration and productivity",
      "Greater flexibility to adapt to change",
      "Increased transparency and stakeholder engagement",
      "Continuous improvement culture"
    ],
    
    services: [
      {
        title: "Agile Transformation",
        description: "Guide your organization through agile adoption with tailored change management strategies."
      },
      {
        title: "Scrum Implementation",
        description: "Establish effective Scrum practices with proper roles, ceremonies, and artifacts."
      },
      {
        title: "Kanban Optimization",
        description: "Implement Kanban systems to visualize work, limit WIP, and optimize flow."
      },
      {
        title: "Agile Coaching",
        description: "Provide ongoing coaching to teams, Scrum Masters, and Product Owners."
      },
      {
        title: "Scaled Agile (SAFe)",
        description: "Implement enterprise-scale agile frameworks for large organizations."
      },
      {
        title: "DevOps Integration",
        description: "Bridge development and operations with agile DevOps practices."
      }
    ],
    
    process: [
      { 
        step: "Assess & Train", 
        description: "We evaluate your current processes and organizational readiness, then educate your teams on agile principles, frameworks, and best practices." 
      },
      { 
        step: "Pilot & Prove", 
        description: "We launch carefully selected pilot projects to demonstrate agile value, gather learnings, and build confidence across your organization." 
      },
      { 
        step: "Scale & Optimize", 
        description: "We expand agile practices across teams and departments while continuously refining processes to maximize efficiency and business value." 
      }
    ],
    
    industries: ["Software Development", "Product Companies", "Startups", "Financial Services", "Healthcare", "Telecommunications"]
  },
  
  ERP: {
    title: "ERP Integration & Implementation",
    tagline: "Unify Your Business with Enterprise Solutions",
    description: "Drive business transformation and competitive advantage with expert ERP implementation. We unify your core systems for a single, real-time source of truth, eliminating manual tasks and operational silos. This empowers data-driven decisions and accelerated growth.",
    image: "/images/erp.jpg",
    
    overview: "Our ERP Integration & Implementation services help organizations leverage enterprise resource planning systems to streamline operations, improve visibility, and drive business growth. We specialize in SAP, Oracle, Microsoft Dynamics, and other leading ERP platforms.",
    
    keyBenefits: [
      "Unified view of business operations",
      "Improved operational efficiency",
      "Real-time data and analytics",
      "Reduced operational costs",
      "Enhanced compliance and controls",
      "Scalable business processes"
    ],
    
    services: [
      {
        title: "ERP Selection & Strategy",
        description: "Help you choose the right ERP solution aligned with your business needs and budget."
      },
      {
        title: "SAP Implementation",
        description: "Full-cycle SAP implementation including S/4HANA, SAP Business One, and SuccessFactors."
      },
      {
        title: "Oracle ERP Cloud",
        description: "Implement and optimize Oracle ERP Cloud solutions for modern enterprises."
      },
      {
        title: "Microsoft Dynamics",
        description: "Deploy Dynamics 365 Finance, Supply Chain, and Business Central solutions."
      },
      {
        title: "System Integration",
        description: "Integrate ERP with CRM, SCM, and other enterprise systems for seamless operations."
      },
      {
        title: "Data Migration",
        description: "Ensure accurate and secure migration of business-critical data to new ERP systems."
      }
    ],
    
    process: [
      { 
        step: "Analyze & Design", 
        description: "We document your business processes and requirements, then design the optimal ERP architecture with customizations tailored to your unique needs." 
      },
      { 
        step: "Configure & Test", 
        description: "We configure ERP modules, develop custom extensions, and conduct comprehensive testing while training your users for successful adoption." 
      },
      { 
        step: "Deploy & Support", 
        description: "We ensure a smooth go-live transition to production and provide ongoing post-implementation support to maximize your ERP investment." 
      }
    ],
    
    industries: ["Manufacturing", "Retail", "Startups", "Healthcare", "Professional Services"]
  },
  
  Cybersecurity: {
    title: "Cybersecurity",
    tagline: "Protect Your Digital Assets with Advanced Security",
    description: "Protect your business from top cybersecurity risks with expert Privileged Access Management. Our CyberArk specialists design and optimize tailored PAM solutions to strengthen security, enable Zero Trust, and prevent data breaches.",
    image: "/images/cybersecurity.jpg",
    
    overview: "Our Cybersecurity services provide comprehensive protection for your digital assets, data, and infrastructure. We implement defense-in-depth strategies, zero-trust architectures, and advanced threat detection to safeguard your organization against evolving cyber threats.",
    
    keyBenefits: [
      "Protected against advanced cyber threats",
      "Compliance with security regulations",
      "Reduced risk of data breaches",
      "Enhanced incident response capabilities",
      "Secure access management",
      "Continuous security monitoring"
    ],
    
    services: [
      {
        title: "Privileged Access Management (PAM)",
        description: "Implement CyberArk and other PAM solutions to secure privileged accounts and credentials."
      },
      {
        title: "Zero Trust Architecture",
        description: "Design and implement zero-trust security models for modern enterprises."
      },
      {
        title: "Security Assessment",
        description: "Comprehensive security audits, penetration testing, and vulnerability assessments."
      },
      {
        title: "Identity & Access Management",
        description: "Implement IAM solutions for secure authentication and authorization."
      },
      {
        title: "Security Operations Center (SOC)",
        description: "Build and operate 24/7 security monitoring and incident response capabilities."
      },
      {
        title: "Compliance Management",
        description: "Ensure compliance with GDPR, HIPAA, PCI-DSS, and other security standards."
      }
    ],
    
    process: [
      { 
        step: "Assess & Strategize", 
        description: "We identify security vulnerabilities, analyze threat landscape, and develop a comprehensive security strategy and roadmap tailored to your risk profile." 
      },
      { 
        step: "Implement & Secure", 
        description: "We deploy advanced security tools, establish robust security controls, and configure continuous monitoring systems to protect your critical assets." 
      },
      { 
        step: "Monitor & Respond", 
        description: "We provide 24/7 security monitoring, threat detection, and rapid incident response with business continuity planning to keep you protected." 
      }
    ],
    
    industries: ["Financial Services", "Healthcare", "Government", "Energy", "Technology"]
  },
  
  QualityEngineering: {
    title: "Quality Engineering",
    tagline: "Build Quality into Every Release",
    description: "Move beyond basic testing to true Quality Engineering. We blend strategic QA consulting with robust test automation to identify and resolve defects early. Guarantee exceptional user experiences, reduce post-release risk, and ensure your application quality is built-in, not tested-in.",
    image: "/images/quality.jpg",
    
    overview: "Our Quality Engineering services go beyond traditional testing to embed quality throughout the development lifecycle. We implement comprehensive QA strategies, test automation frameworks, and continuous testing practices that ensure software excellence.",
    
    keyBenefits: [
      "Higher software quality and reliability",
      "Faster release cycles with confidence",
      "Reduced defects in production",
      "Lower testing costs through automation",
      "Improved user experience",
      "Continuous quality feedback"
    ],
    
    services: [
      {
        title: "Test Strategy & Planning",
        description: "Develop comprehensive test strategies aligned with your development processes."
      },
      {
        title: "Test Automation",
        description: "Implement robust test automation frameworks using Selenium, Cypress, and modern tools."
      },
      {
        title: "Performance Testing",
        description: "Ensure application performance and scalability under various load conditions."
      },
      {
        title: "Security Testing",
        description: "Identify security vulnerabilities through comprehensive security testing."
      },
      {
        title: "Mobile Testing",
        description: "Test mobile applications across devices, platforms, and network conditions."
      },
      {
        title: "Continuous Testing",
        description: "Integrate testing into CI/CD pipelines for continuous quality feedback."
      }
    ],
    
    process: [
      { 
        step: "Evaluate & Plan", 
        description: "We assess your current testing processes, identify gaps, and design a comprehensive test strategy with the right automation framework for your needs." 
      },
      { 
        step: "Automate & Execute", 
        description: "We implement test automation tools, execute comprehensive test plans across all quality dimensions, and report on detailed quality metrics." 
      },
      { 
        step: "Integrate & Optimize", 
        description: "We integrate testing into your CI/CD pipelines for continuous quality feedback and continuously improve coverage, processes, and efficiency." 
      }
    ],
    
    industries: ["Software Development", "E-commerce", "Financial Services", "Healthcare", "Gaming", "SaaS"]
  },
  
  WebsiteDevelopment: {
    title: "Website Development",
    tagline: "Build Your Digital Presence",
    description: "Build a powerful online presence with our custom website development services. We create responsive, user-friendly, and visually engaging websites that reflect your brand and drive business growth.",
    image: "/images/web-dev.jpg",
    
    overview: "Our Website Development services create modern, responsive, and high-performing websites that engage users and drive conversions. We leverage the latest web technologies and best practices to build websites that look great and perform exceptionally across all devices.",
    
    keyBenefits: [
      "Professional, modern web design",
      "Mobile-responsive across all devices",
      "Fast loading and optimized performance",
      "SEO-friendly architecture",
      "Secure and scalable infrastructure",
      "Easy content management"
    ],
    
    services: [
      {
        title: "Custom Website Design",
        description: "Create unique, branded website designs that stand out and engage visitors."
      },
      {
        title: "E-commerce Development",
        description: "Build robust online stores with secure payment processing and inventory management."
      },
      {
        title: "CMS Development",
        description: "Implement content management systems like WordPress, Drupal, or custom CMS solutions."
      },
      {
        title: "Web Application Development",
        description: "Develop complex web applications using React, Angular, Vue.js, and modern frameworks."
      },
      {
        title: "Website Maintenance",
        description: "Ongoing website maintenance, updates, and technical support services."
      },
      {
        title: "SEO Optimization",
        description: "Optimize websites for search engines to improve visibility and organic traffic."
      }
    ],
    
    process: [
      { 
        step: "Discover & Design", 
        description: "We understand your brand, target audience, and website goals, then create compelling wireframes and visual designs that align with your vision." 
      },
      { 
        step: "Build & Test", 
        description: "We develop your responsive website using modern technologies and conduct comprehensive testing across all browsers and devices to ensure flawless performance." 
      },
      { 
        step: "Launch & Support", 
        description: "We deploy your website to production with SEO optimization and provide ongoing maintenance, updates, and technical support to keep it running smoothly." 
      }
    ],
    
    industries: ["All Industries", "E-commerce", "Professional Services", "Hospitality", "Non-Profit", "Education"]
  },
  
  "Custom API Integration": {
    title: "Custom API Integration",
    tagline: "Connect Your Digital Ecosystem",
    description: "Seamlessly connect your applications with our tailored API integration services. We streamline data flow, enhance system interoperability, and improve efficiency across your digital ecosystem.",
    image: "/images/api.jpg",
    
    overview: "Our Custom API Integration services enable seamless communication between your applications, systems, and third-party services. We design and implement robust API architectures that ensure reliable data exchange and system interoperability.",
    
    keyBenefits: [
      "Seamless system integration",
      "Automated data synchronization",
      "Improved operational efficiency",
      "Real-time data exchange",
      "Reduced manual data entry",
      "Enhanced system capabilities"
    ],
    
    services: [
      {
        title: "API Development",
        description: "Design and develop RESTful and GraphQL APIs for your applications."
      },
      {
        title: "Third-Party Integration",
        description: "Integrate with popular platforms like Salesforce, Stripe, Shopify, and more."
      },
      {
        title: "Microservices Architecture",
        description: "Design and implement microservices-based architectures for scalability."
      },
      {
        title: "API Gateway Implementation",
        description: "Set up API gateways for security, rate limiting, and traffic management."
      },
      {
        title: "Legacy System Integration",
        description: "Connect legacy systems with modern applications through API wrappers."
      },
      {
        title: "API Documentation",
        description: "Create comprehensive API documentation for developers and partners."
      }
    ],
    
    process: [
      { 
        step: "Analyze & Design", 
        description: "We identify your integration requirements, map data flows, and design a robust API architecture with optimal data models for your ecosystem." 
      },
      { 
        step: "Develop & Integrate", 
        description: "We develop and thoroughly test API endpoints, then seamlessly integrate them with your existing systems and third-party platforms." 
      },
      { 
        step: "Monitor & Maintain", 
        description: "We continuously monitor API performance, ensure reliability, and provide ongoing maintenance to keep your integrations running optimally." 
      }
    ],
    
    industries: ["E-commerce", "Financial Services", "Healthcare", "SaaS"]
  },
  
  "Cloud Strategy & Transformation": {
    title: "Cloud Strategy & Transformation",
    tagline: "Accelerate Your Cloud Journey",
    description: "Accelerate your digital journey with a well-defined cloud strategy. We help you plan, migrate, and optimize cloud solutions to enhance scalability, reduce costs, and drive innovation.",
    image: "/images/cloud.jpg",
    
    overview: "Our Cloud Strategy & Transformation services help organizations leverage cloud computing to achieve business agility, cost efficiency, and innovation. We provide end-to-end cloud migration, optimization, and management services across AWS, Azure, and Google Cloud.",
    
    keyBenefits: [
      "Reduced IT infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced business continuity",
      "Faster time-to-market",
      "Access to advanced cloud services",
      "Global reach and performance"
    ],
    
    services: [
      {
        title: "Cloud Strategy & Roadmap",
        description: "Develop comprehensive cloud adoption strategy aligned with business goals."
      },
      {
        title: "Cloud Migration",
        description: "Migrate applications, data, and infrastructure to AWS, Azure, or Google Cloud."
      },
      {
        title: "Cloud Architecture",
        description: "Design scalable, secure, and cost-effective cloud architectures."
      },
      {
        title: "Cloud Optimization",
        description: "Optimize cloud costs, performance, and resource utilization."
      },
      {
        title: "Multi-Cloud Management",
        description: "Manage and orchestrate resources across multiple cloud providers."
      },
      {
        title: "Cloud Security",
        description: "Implement cloud security best practices and compliance controls."
      }
    ],
    
    process: [
      { 
        step: "Assess & Strategize", 
        description: "We evaluate your current infrastructure and cloud readiness, then define a comprehensive cloud strategy with a clear migration approach aligned to your business goals." 
      },
      { 
        step: "Migrate & Architect", 
        description: "We execute a phased migration to your chosen cloud platform (AWS, Azure, or Google Cloud) while designing scalable, secure, and cost-effective cloud architectures." 
      },
      { 
        step: "Optimize & Manage", 
        description: "We continuously optimize cloud resources and costs, implement security best practices, and provide ongoing cloud management and support for peak performance." 
      }
    ],
    
    industries: ["E-commerce", "Financial Services", "Healthcare", "Education", "Government"]
  }
};
export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICE_DATA[id];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-[#E5FA63] hover:text-yellow-500">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
  className="relative bg-gradient-to-r from-black to-[#E5FA63] text-white py-16 sm:py-20 lg:py-28"
  data-aos="fade-down"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link 
      to="/" 
      className="inline-flex items-center text-white/90 hover:text-white mb-6 text-sm sm:text-base transition"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Home
    </Link>
    
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
      {service.title}
    </h1>
    <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 max-w-4xl">
      {service.tagline}
    </p>
    <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl">
      {service.description}
    </p>
  </div>
</section>


      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#E5FA63] mb-4 sm:mb-6">
                Overview
              </h2>
              <p className="text-base sm:text-lg text-[#E5FA63]/80 leading-relaxed">
                {service.overview}
              </p>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-black/10 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-[#E5FA63] mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-[#E5FA63]" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm sm:text-base text-[#E5FA63]">
                      <CheckCircle className="w-5 h-5 text-[#E5FA63] mr-3 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center text-[#E5FA63] mb-10 sm:mb-16"
            data-aos="fade-up"
          >
            What We Offer
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.services.map((item, index) => (
              <div 
                key={index}
                className="bg-black/20 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-yellow-400 transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#E5FA63]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#E5FA63] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#E5FA63]/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center text-[#E5FA63] mb-10 sm:mb-16"
            data-aos="fade-up"
          >
            Our Process
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-start gap-10 sm:gap-8 lg:gap-12 flex-wrap sm:flex-nowrap">
            {service.process.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#E5FA63] mb-2">
                  {step.step}
                </h3>
                <p className="text-sm sm:text-base text-[#E5FA63]/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & CTA */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-black via-[#E5FA63]/30 to-black text-black overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Industries */}
          <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 text-black">
              Industries We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {service.industries.map((industry, index) => (
                <span 
                  key={index}
                  className="px-5 sm:px-7 py-2.5 sm:py-3 bg-black/20 rounded-full text-black font-semibold hover:bg-[#E5FA63] hover:text-black transition-all duration-300 shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E5FA63]/50 to-transparent mx-auto mb-16 sm:mb-20"></div>

          {/* CTA */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-black/20 rounded-full text-sm font-semibold tracking-wide uppercase text-black">
                Let's Work Together
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 leading-tight text-black">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-black/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Let's discuss how our <span className="font-semibold text-black">{service.title}</span> services can help drive innovation, efficiency, and growth for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-[#E5FA63] rounded-xl overflow-hidden shadow-2xl hover:shadow-yellow-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-[#E5FA63]/70 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
