
import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Cloud, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-saas-orange" />,
      name: 'Mobile App Development',
      description: 'Powerful Native Android Applications to Streamline Your Business',
      features: [
        'iOS & Android Development',
        'Flutter',
        'UI/UX Design',
        'Performance Optimization'
      ],
      ctaText: 'Get Mobile App'
    },
    {
      icon: <Globe className="h-8 w-8 text-saas-orange" />,
      name: 'Web Development',
      description: 'Modern, responsive websites and web applications built efficiently.',
      features: [
        'E-commerce Solutions',
        'Modern, Responsive Websites',
        'Custom Software Solutions',
        'Real-Time Analytics'
      ],
      ctaText: 'Get Website'
    },
    {
      icon: <Cloud className="h-8 w-8 text-saas-orange" />,
      name: 'Cloud Hosting',
      description: 'Reliable and scalable cloud hosting solutions',
      features: [
        '24/7 Monitoring',
        'Auto-scaling',
        'Security Management',
        'Backup Solutions'
      ],
      ctaText: 'Get Hosting'
    },
    {
      icon: <Palette className="h-8 w-8 text-saas-orange" />,
      name: 'Graphic Design',
      description: 'Creative design solutions for your brand',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'UI/UX Design',
        'Social Media Graphics'
      ],
      ctaText: 'Get Design'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-saas-darkGray to-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray rounded-2xl p-8 border border-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:border-saas-orange/30 flex flex-col h-full"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
              <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="h-2 w-2 bg-saas-orange rounded-full mr-2 mt-2 shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button 
                  onClick={() => window.open('https://www.facebook.com/brylon.fayosal.9/', '_blank')}
                  className="w-full bg-saas-orange hover:bg-orange-600 text-white"
                >
                  {service.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
