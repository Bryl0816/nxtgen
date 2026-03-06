
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teams = [
  {
    name: "Mc Denver Alba",
    position: "Developer",
    description: "Specializes in building scalable and high-performance web and mobile applications with a strong focus on clean architecture, security, and seamless user experience.",
    image: "/favicon/MC.png"
  },
  {
    name: "Michael De Leon",
    position: "Developer",
    description: "Passionate about developing efficient, reliable, and user-focused digital solutions using modern technologies to drive business growth and innovation.",
    image: "/favicon/MD.png"
  },
  {
    name: "Brylon Fayosal",
    position: "Developer/Designer",
    description: "Combines technical expertise with creative vision to craft powerful web and mobile applications alongside visually compelling designs that enhance brand identity.",
    image: "/favicon/Bryl.png"
  },
  {
    name: "Marc Paul Tuquilar",
    position: "Developer/Designer",
    description: "Brings together development skills and strong design aesthetics to create intuitive, visually engaging digital experiences that deliver both function and impact.",
    image: "/favicon/MP.png"
  }
];

const TeamSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400">
            Get to know the talented individuals behind NXT Gen. Our diverse team brings together expertise from various fields to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-8 text-center card-shadow"
            >
              <div className="mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-saas-orange/20"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-saas-orange font-semibold mb-4">{member.position}</p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
