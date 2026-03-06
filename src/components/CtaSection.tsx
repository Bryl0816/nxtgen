
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const handleGetStarted = () => {
    // Redirect to Facebook account
    window.open('https://www.facebook.com/brylon.fayosal.9/', '_blank');
  };

  const handleStartProject = () => {
    console.log('Start project clicked');
    // Open email client or navigate to contact
    window.open('mailto:nxtgen@gmail.com?subject=Project Inquiry&body=Hi NXT Gen Team, I would like to start a project with you.');
  };

  return (
    <div className="bg-saas-darkGray py-16 md:py-20">
      <div className="section-container">
        <div className="bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl">
                Join the growing number of companies transforming their operations and scaling their business with NXTGEN. Try it today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleGetStarted}
                  className="bg-saas-orange hover:bg-orange-600 text-white font-semibold"
                >
                  Get started
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Development Team Collaboration"
                className="rounded-lg w-full card-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      </div>
  );
};

export default CtaSection;
