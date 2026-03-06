import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      // Update active section immediately on click
      setActiveSection(sectionId);
    }
  };

  // Function to handle navigation
  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  // Intersection Observer for scroll-based highlighting
  useEffect(() => {
    const sections = ['features', 'services', 'portfolio', 'team', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Section is considered active when 30% is visible
        rootMargin: '-100px 0px -100px 0px' // Offset for better UX
      }
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Check if we're at the top of the page
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
         {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="public/favicon/nxtgen-2.png"     
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                  setActiveSection('');
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === ''
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'features'
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'services'
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Our Services
              </button>
              <button
                onClick={() => handleNavClick('portfolio')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'portfolio'
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavClick('team')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'team'
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'contact'
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
                setActiveSection('');
              }}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === ''
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === 'features'
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === 'services'
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Our Services
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === 'portfolio'
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === 'team'
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === 'contact'
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Contact
            </button>
                      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
