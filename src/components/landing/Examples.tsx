import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

const Examples: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const codeExamples = {
    basic: {
      title: "basic_setup.py",
      code: `from mcp_kit import MCPKit

# Create a mock MCP server
kit = MCPKit()

# Configure the mock server
server = kit.create_mock_server({
    "name": "example-server",
    "tools": [
        {
            "name": "get_weather",
            "description": "Get weather information",
            "parameters": {
                "location": {"type": "string"}
            }
        }
    ]
})

# Start the server
server.start()`
    },
    advanced: {
      title: "advanced_mocking.py", 
      code: `from mcp_kit import MCPKit
from mcp_kit.generators import LLMGenerator

# Create an advanced mock with LLM-powered responses
kit = MCPKit()

# Configure LLM-based response generation
llm_generator = LLMGenerator(
    model="gpt-3.5-turbo",
    temperature=0.7
)

server = kit.create_mock_server({
    "name": "smart-server",
    "response_generator": llm_generator,
    "tools": [
        {
            "name": "analyze_data",
            "description": "Analyze complex datasets",
            "schema": {
                "type": "object",
                "properties": {
                    "data": {"type": "array"},
                    "analysis_type": {"type": "string"}
                }
            }
        }
    ]
})

server.start()`
    },
    testing: {
      title: "testing_framework.py",
      code: `import pytest
from mcp_kit import MCPKit
from mcp_kit.testing import MCPTestClient

@pytest.fixture
def mock_server():
    kit = MCPKit()
    return kit.create_mock_server({
        "name": "test-server",
        "tools": ["calculator", "weather"]
    })

def test_tool_invocation(mock_server):
    client = MCPTestClient(mock_server)
    
    response = client.call_tool("calculator", {
        "operation": "add",
        "a": 5,
        "b": 3
    })
    
    assert response.status == "success"
    assert "result" in response.data

def test_server_behavior(mock_server):
    # Test server responses and behavior
    assert mock_server.is_running()
    assert len(mock_server.tools) == 2`
    }
  };

  return (
    <section id="examples" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#0F172A',
            margin: '0 0 1.5rem 0'
          }}>
            See It In Action
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: 1.625
          }}>
            Explore practical examples of how mcp-kit simplifies AI agent development.
          </p>
        </div>
        
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{
            borderRadius: '0.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            backgroundColor: '#0F172A'
          }}>
            {/* Tab Navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem 1.5rem 0.5rem 1.5rem'
            }}>
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                borderRadius: '0.5rem',
                padding: '0.25rem',
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                {Object.entries(codeExamples).map(([key, example]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    style={{
                      padding: '0.375rem 0.75rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      borderRadius: '0.375rem',
                      transition: 'all 0.2s',
                      backgroundColor: activeTab === key ? '#3B82F6' : 'transparent',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {example.title}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#ef4444', borderRadius: '50%' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#eab308', borderRadius: '50%' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#22c55e', borderRadius: '50%' }}></div>
              </div>
            </div>
            
            {/* Code Display */}
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
              <CodeBlock 
                language="python"
                title={codeExamples[activeTab].title}
              >
                {codeExamples[activeTab].code}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
