import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4a2 2 0 01-2 2H5zM5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: "MCP Server Mocking",
      description: "LLM-based mocked MCP servers, enabling rapid development and testing of AI agents without external dependencies."
    },
    {
      icon: (
        <svg className="h-8 w-8" style={{ color: '#06B6D4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "OAS3/REST Support",
      description: "Comprehensive OpenAPI Specification 3.0 and REST API mocking capabilities for complete API simulation and testing."
    },
    {
      icon: (
        <svg className="h-8 w-8" style={{ color: '#7C3AED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Optimized SDKs designed for performance, allowing you to iterate quickly on AI agent development and testing."
    },
    {
      icon: (
        <svg className="h-8 w-8" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Type Safe",
      description: "Fully type-annotated, ensuring your mocked services behave predictably and catch errors early."
    },
    {
      icon: (
        <svg className="h-8 w-8" style={{ color: '#06B6D4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Highly Configurable",
      description: "Flexible YAML-based configuration to easily satisfy your specific use case, from simple mocks to complex behavioral simulations."
    },
    {
      icon: (
        <svg className="h-8 w-8" style={{ color: '#7C3AED' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "Production Ready",
      description: "Battle-tested in production environments, with comprehensive documentation and community support for enterprise use."
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05
      }}>
        <div style={{
          position: 'absolute',
          top: '5rem',
          right: '5rem',
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          filter: 'blur(64px)',
          background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '5rem',
          left: '5rem',
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          filter: 'blur(64px)',
          background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
        }}></div>
      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#0F172A',
            margin: '0 0 1.5rem 0'
          }}>
            Powerful Features for AI Development
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Our open-source SDKs provide everything you need to mock, test, and optimize your AI agents efficiently.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <Card 
              key={index} 
              style={{
                borderColor: 'rgba(59, 130, 246, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
              }}
            >
              <CardHeader style={{ textAlign: 'center', paddingBottom: '1rem' }}>
                <div style={{
                  margin: '0 auto 1rem auto',
                  padding: '0.75rem',
                  backgroundColor: '#f9fafb',
                  borderRadius: '50%',
                  width: 'fit-content',
                  transition: 'background-color 0.3s ease'
                }}>
                  {feature.icon}
                </div>
                <CardTitle style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  transition: 'color 0.3s ease'
                }}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent style={{ textAlign: 'center' }}>
                <CardDescription style={{
                  color: '#6b7280',
                  lineHeight: 1.625
                }}>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
