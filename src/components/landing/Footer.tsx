import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#0F172A' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Agentiqs<span style={{ color: '#3B82F6' }}>.ai</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Pioneering the future of AI Agent optimization with open-source tools.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/agentiqs" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 transition-colors duration-300"
                 style={{
                   ':hover': { color: '#3B82F6' }
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:sales@agentiqs.ai" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 transition-colors duration-300"
                 onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Product links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/agentiqs/mcp-kit-python" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-300 hover:text-white transition-colors duration-300">Python SDK</a></li>
              <li><a href="https://github.com/agentiqs/mcp-kit-python/tree/main/docs" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-300 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="https://github.com/agentiqs/mcp-kit-python/tree/main/examples" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-300 hover:text-white transition-colors duration-300">Examples</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="mailto:sales@agentiqs.ai" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Agentiqs.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/agentiqs/mcp-kit-python/tree/main/LICENSE" 
               className="text-gray-300 hover:text-white text-sm transition-colors duration-300">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
