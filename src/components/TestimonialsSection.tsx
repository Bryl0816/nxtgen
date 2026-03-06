
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sampleWork = [
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping platform with advanced filtering and payment integration",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Hotel Booking App",
    description: "Secure and intuitive web booking solution with real-time availability",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Dashboard",
    description: "Real-time analytics dashboard for cloud infrastructure monitoring",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Graphic Design",
    description: "Professional graphic design services for branding and marketing materials",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Point of Sale System",
    description: "Modern retail POS system with inventory management and analytics",
    category: "POS",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Internet of Things (IoT)",
    description: "Connected home automation system with voice control and mobile app",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&h=250"
  }
];

const SampleWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = sampleWork.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Sample Work</span>
          </h2>
          <p className="text-gray-400">
            Explore our portfolio of innovative projects and solutions delivered to clients worldwide.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-saas-orange hover:bg-orange-600 text-white rounded-full p-3 transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-saas-orange hover:bg-orange-600 text-white rounded-full p-3 transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {sampleWork.map((work, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 md:w-1/3"
                >
                  <div className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl overflow-hidden card-shadow h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-saas-orange text-sm font-semibold">
                          {work.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{work.title}</h3>
                      <p className="text-gray-300 text-sm">{work.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === Math.floor(currentIndex / itemsPerPage)
                    ? 'bg-saas-orange'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleWorkSection;
