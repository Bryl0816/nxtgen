
import React from 'react';
import { Check, Search, Settings, User, Home, Cloud, Lock } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-saas-orange" />,
    title: 'Smart Analytics',
    description: 'Gain valuable insights with our advanced analytics, helping you make data-driven decisions.'
  },
  {
    icon: <Settings className="h-6 w-6 text-saas-orange" />,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows. No disruption to your business.'
  },
  {
    icon: <User className="h-6 w-6 text-saas-orange" />,
    title: 'User Management',
    description: 'Powerful user management and permission controls to keep your data secure and accessible.'
  },
  {
    icon: <Home className="h-6 w-6 text-saas-orange" />,
    title: 'Customizable Dashboard',
    description: 'Create custom dashboards tailored to your specific needs and business goals.'
  },
  {
    icon: <Cloud className="h-6 w-6 text-saas-orange" />,
    title: 'Cloud Integration',
    description: 'Seamlessly connect with popular cloud services and platforms.'
  },
  {
    icon: <Lock className="h-6 w-6 text-saas-orange" />,
    title: 'Secure Data Protection',
    description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.'
  }
];

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart <span className="gradient-text">Features</span> to Elevate Your Business
          </h2>
          <p className="text-gray-400">
            Built with modern technology to deliver fast performance, reliable stability, and the flexibility to 
            scale seamlessly as your business grows and evolves.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
