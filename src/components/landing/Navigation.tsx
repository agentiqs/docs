import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'examples', 'pricing'];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Agentiqs.ai', isLogo: true },
    { id: 'features', label: 'Features' },
    { id: 'examples', label: 'Examples' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800" 
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex rounded-lg p-1 max-w-2xl w-full" 
               style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)', border: '1px solid rgba(75, 85, 99, 1)' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeSection === item.id ? '#374151' : 'transparent'
                }}
              >
                {item.isLogo ? (
                  <span className="text-white font-bold">
                    Agentiqs<span style={{ color: '#3B82F6' }}>.ai</span>
                  </span>
                ) : (
                  item.label
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
