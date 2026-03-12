
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const technologies = [
  {
    name: "Laravel",
    description: "A powerful PHP framework for building robust web applications with elegant syntax and comprehensive features.",
    image: "/tech/laravel.png"
  },
  {
    name: "PHP",
    description: "Server-side scripting language designed for web development, powering millions of websites worldwide.",
    image: "/tech/php.png"
  },
  {
    name: "Python",
    description: "High-level programming language known for its simplicity and versatility in web development, data science, and automation.",
    image: "/tech/python.png"
  },
  {
    name: "MySQL",
    description: "Leading open-source relational database management system for storing and managing data efficiently.",
    image: "/tech/mysql.png"
  },
  {
    name: "Flutter",
    description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    image: "/tech/flutter.png"
  },
  {
    name: "Figma",
    description: "Collaborative interface design tool for creating, prototyping, and sharing user interface designs.",
    image: "/tech/figma.png"
  }
];

const TechnologiesSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies <span className="gradient-text">Used</span>
          </h2>
          <p className="text-gray-400">
            Explore the cutting-edge technologies and tools we use to build exceptional digital solutions that drive innovation and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-8 text-center card-shadow"
            >
              <div className="mb-6">
                <img 
                  src={tech.image}
                  alt={tech.name}
                  className="w-27 h-27 mx-auto object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
              <p className="text-gray-300 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
