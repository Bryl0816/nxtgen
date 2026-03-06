import React, { useState } from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic or API call here
    alert('Thank you for your interest! We will contact you soon.');
    onClose();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-saas-black rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-800">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Get Started</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-saas-darkGray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saas-orange"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-saas-darkGray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saas-orange"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-saas-darkGray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saas-orange"
                placeholder="+63 XXX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 bg-saas-darkGray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saas-orange resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
