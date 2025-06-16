import React from 'react';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F172A' }}>
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started for free with our open-source library, or upgrade to our hosted solution for enterprise features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Open Source */}
          <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold" style={{ color: '#0F172A' }}>Open Source: Free Forever</CardTitle>
              <CardDescription className="text-lg">Perfect for individuals and small teams</CardDescription>
              <div className="text-4xl font-bold mt-4" style={{ color: '#3B82F6' }}>Free</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full mcp-kit Python SDK</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full mcp-kit TypeScript SDK <span className="text-sm text-gray-600">(coming soon)</span></span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>MCP server mocking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>OAS3/REST support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="block mb-2">Adapters for all major MCP & Agent SDKs:</span>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>
                        <a href="https://github.com/modelcontextprotocol/python-sdk" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#3B82F6' }}>
                          MCP Python SDK
                        </a> (Server, FastMCP & ClientSession)
                      </div>
                      <div>
                        <a href="https://github.com/jlowin/fastmcp" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#3B82F6' }}>
                          FastMCP 2.0
                        </a>
                      </div>
                      <div>
                        <a href="https://github.com/openai/openai-agents-python" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#3B82F6' }}>
                          OpenAI Agents
                        </a>
                      </div>
                      <div>
                        <a href="https://github.com/langchain-ai/langgraph" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#3B82F6' }}>
                          LangGraph
                        </a>
                      </div>
                      <div>
                        <a href="https://github.com/run-llama/llama_index" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#3B82F6' }}>
                          LlamaIndex
                        </a>
                      </div>
                      <div>
                        <a href="https://github.com/crewAIInc/crewAI" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#3B82F6' }}>
                          CrewAI
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community support</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 text-white"
                style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)' }}
                onClick={() => window.open('https://github.com/agentiqs/mcp-kit-python', '_blank')}
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Hosted Solution */}
          <Card className="border-2" style={{ borderColor: '#3B82F6', background: 'linear-gradient(135deg, #ffffff 0%, rgba(59, 130, 246, 0.05) 100%)' }}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold" style={{ color: '#0F172A' }}>Hosted Solution</CardTitle>
              <CardDescription className="text-lg">Enterprise-ready with premium features</CardDescription>
              <div className="text-4xl font-bold mt-4" style={{ color: '#3B82F6' }}>Contact Us</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Open Source</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Managed cloud infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 premium support & SLA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations & SDKs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics & monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise security & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-tenant isolation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Auto-scaling & load balancing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Private cloud deployment options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Training & onboarding sessions</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 text-white"
                style={{ backgroundColor: '#3B82F6' }}
                onClick={() => window.open('mailto:sales@agentiqs.ai?subject=Hosted mcp-kit Inquiry', '_blank', 'rel=noopener noreferrer')}
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
