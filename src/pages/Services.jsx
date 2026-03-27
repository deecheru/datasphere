import React from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  { id: "design", title: "Product Design", desc: "Full product design — research, IA, UI/UX and prototypes" },
  { id: "web", title: "Web Development", desc: "Modern web apps with React, server APIs and testing" },
  { id: "cloud", title: "Cloud Engineering", desc: "Infrastructure, automation, observability & infra as code" },
];

export default function Services(){
  return (
    // Max width and centering for layout consistency
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-500">Our Consulting Services</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(s => (
          // Entire tile is a clickable link to the detail page
          <Link 
            key={s.id} 
            to={`/services/${s.id}`} 
            className="block bg-black-50 border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              {/* 💙 NEW: Title color set to indigo-500 */}
              <h3 className="text-2xl font-semibold text-indigo-500 mb-2">{s.title}</h3> 
              <p className="text-gray-700">{s.desc}</p>
              
              {/* Subtle visual link indicator */}
              <span className="inline-block mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition">
                Explore service →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}