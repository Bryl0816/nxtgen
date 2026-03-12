import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-saas-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img 
                src="/favicon/nxtgen-2.png" 
                alt="NXT Gen" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 mb-4">
              Powering Businesses Through Digital Innovation
              Smart technology solutions that help your business grow faster and operate smarter.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-saas-orange transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('features');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-saas-orange transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('services');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-saas-orange transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('portfolio');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-saas-orange transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('team');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-saas-orange transition-colors text-left"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById('contact');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-saas-orange transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Mobile App Development
              </li>
              <li className="text-gray-400">
                Web Development
              </li>
              <li className="text-gray-400">
                Cloud Hosting
              </li>
              <li className="text-gray-400">
                Graphic Design
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                support.nxtgen@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +63 975 444 7123
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Cauayan City, Isabela
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Copyright © 2026 NXT GEN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
