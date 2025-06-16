import React from 'react';
import { Button } from './Button';

const Benefits: React.FC = () => {
  const benefits = [
    "Reduce development time by 70% with instant mocking",
    "Test AI agents without external API dependencies", 
    "Validate agent behavior in isolated environments",
    "Scale testing across multiple scenarios seamlessly",
    "With the most popular Agent SDKs",
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full" 
           style={{ 
             backgroundColor: 'rgba(59, 130, 246, 0.2)',
             animation: 'float 3s ease-in-out infinite'
           }}></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full" 
           style={{ 
             backgroundColor: 'rgba(124, 58, 237, 0.2)',
             animation: 'float 3s ease-in-out infinite',
             animationDelay: '1s'
           }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full" 
           style={{ 
             backgroundColor: 'rgba(6, 182, 212, 0.2)',
             animation: 'float 3s ease-in-out infinite',
             animationDelay: '2s'
           }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#0F172A' }}>
                Why Choose Agentiqs.ai
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stop waiting for external services and start building. Our mocking library empowers developers 
                to create, test, and optimize AI agents in controlled environments.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="h-6 w-6 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="shadow-lg font-semibold"
                style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)' }}
                onClick={() => window.open('https://github.com/agentiqs/mcp-kit-python', '_blank')}
              >
                Get Started Today
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button 
                size="lg"
                className="font-semibold text-white"
                style={{ backgroundColor: '#3B82F6' }}
                onClick={() => window.open('mailto:sales@agentiqs.ai?subject=Hosted mcp-kit Inquiry', '_blank', 'rel=noopener noreferrer')}
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get hosted mcp-kit
              </Button>
            </div>
          </div>
          
          {/* Right side - Visual or additional content */}
          <div className="relative">
            <div className="rounded-lg shadow-2xl p-8 text-white" style={{ backgroundColor: '#0F172A' }}>
              <h3 className="text-2xl font-bold mb-4">Ready to accelerate your development?</h3>
              <p className="mb-6" style={{ color: '#06B6D4' }}>
                Join a growing number of developers who are already using mcp-kit to streamline their AI agent workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>2-minute setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Zero configuration required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Production-ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
