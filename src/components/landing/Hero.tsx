import React from 'react';
import { Button } from './Button';

const Hero: React.FC = () => {
  return (
    <>
      <section style={{ 
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '5rem',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
      }}>
        {/* Animated background elements */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1
        }}>
          <div style={{ 
            position: 'absolute',
            top: '5rem',
            left: '2.5rem',
            width: '16rem',
            height: '16rem',
            borderRadius: '50%',
            filter: 'blur(60px)',
            backgroundColor: '#3B82F6', 
            mixBlendMode: 'multiply',
            animation: 'heroFloat 3s ease-in-out infinite'
          }}></div>
          <div style={{ 
            position: 'absolute',
            top: '10rem',
            right: '2.5rem',
            width: '16rem',
            height: '16rem',
            borderRadius: '50%',
            filter: 'blur(60px)',
            backgroundColor: '#06B6D4', 
            mixBlendMode: 'multiply',
            animation: 'heroFloat 3s ease-in-out infinite',
            animationDelay: '1s'
          }}></div>
          <div style={{ 
            position: 'absolute',
            bottom: '5rem',
            left: '33.333333%',
            width: '16rem',
            height: '16rem',
            borderRadius: '50%',
            filter: 'blur(60px)',
            backgroundColor: '#7C3AED', 
            mixBlendMode: 'multiply',
            animation: 'heroFloat 3s ease-in-out infinite',
            animationDelay: '2s'
          }}></div>
        </div>
        
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            {/* Logo/Brand */}
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{
                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem',
                letterSpacing: '-0.025em',
                margin: 0
              }}>
                Agentiqs<span style={{ color: '#3B82F6' }}>.ai</span>
              </h1>
              <div style={{ 
                width: '6rem',
                height: '0.25rem',
                margin: '0 auto',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
              }}></div>
            </div>
            
            {/* Main headline */}
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 600,
              color: '#e5e7eb',
              marginBottom: '1.5rem',
              lineHeight: 1.25,
              margin: '0 0 1.5rem 0'
            }}>
              Optimize Your AI Agents with
              <span style={{ 
                display: 'block', 
                marginTop: '0.5rem',
                color: '#06B6D4'
              }}>Next-Generation Tooling</span>
            </h2>
            
            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: '#d1d5db',
              marginBottom: '2rem',
              maxWidth: '48rem',
              margin: '0 auto 2rem auto',
              lineHeight: 1.625
            }}>
              We're pioneering the future of AI Agent optimization. Start with our open-source SDKs 
              for mocking MCP servers, featuring comprehensive OAS3/REST support for seamless development.
            </p>
            
            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Button 
                  size="lg" 
                  style={{
                    background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)',
                    animation: 'heroGlow 2s ease-in-out infinite alternate',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                  }}
                  onClick={() => window.open('https://github.com/agentiqs/mcp-kit-python', '_blank')}
                >
                  <svg style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  mcp-kit
                  <svg style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                
                <Button 
                  size="lg"
                  style={{ backgroundColor: '#3B82F6' }}
                  onClick={() => window.open('mailto:sales@agentiqs.ai?subject=Hosted mcp-kit Inquiry', '_blank', 'rel=noopener noreferrer')}
                >
                  <svg style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get hosted mcp-kit
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  style={{ borderColor: '#3B82F6', color: '#3B82F6' }}
                  onClick={() => window.open('https://github.com/agentiqs/mcp-kit-python/tree/main/docs', '_blank')}
                >
                  <svg style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Documentation
                </Button>
              </div>
            </div>
            
            {/* Tech badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '4rem'
            }}>
              {['MCP Servers', 'Mocking', 'OAS3/REST', 'Open Source'].map((badge, index) => (
                <span 
                  key={index}
                  style={{ 
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div style={{ 
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'heroBounce 1s infinite'
        }}>
          <div style={{
            width: '1.5rem',
            height: '2.5rem',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '0.25rem',
              height: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '9999px',
              marginTop: '0.5rem'
            }}></div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        @keyframes heroBounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(-50%, 0, 0);
          }
          40%, 43% {
            transform: translate3d(-50%, -30px, 0);
          }
          70% {
            transform: translate3d(-50%, -15px, 0);
          }
          90% {
            transform: translate3d(-50%, -4px, 0);
          }
        }
        
        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
