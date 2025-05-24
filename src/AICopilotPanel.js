import React, { useState } from 'react';
import './AICopilotPanel.css';

const AICopilotPanel = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hi there! I can help answer questions about your account, billing, and more.', time: 'Just now' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      time: 'Just now'
    };
    setMessages([...messages, userMsg]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiMsg = {
        id: messages.length + 2,
        sender: 'ai',
        text: getAIResponse(inputValue),
        time: 'Just now'
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 800);
  };

  const getAIResponse = (query) => {
    const responses = [
      "I can help with that. Let me check your account details...",
      "Based on our records, you have an active subscription until next month.",
      "Would you like me to walk you through the billing process?",
      "I found a solution for you in our help center. Would you like me to share it?",
      "Let me connect you with a human specialist who can assist further."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  if (isMinimized) {
    return (
      <div className="ai-copilot-minimized">
        <button 
          className="minimize-toggle"
          onClick={() => setIsMinimized(false)}
          aria-label="Open AI Assistant"
        >
          <div className="ai-avatar">AI</div>
        </button>
      </div>
    );
  }

  return (
    <div className="ai-copilot-panel">
      <div className="ai-header">
        <div className="ai-header-content">
          <div className="ai-avatar">AI</div>
          <div>
            <h3>AI Assistant</h3>
            <p>Here to help 24/7</p>
          </div>
        </div>
        <div className="ai-header-actions">
          <button 
            className="minimize-toggle"
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize"
          >
            &minus;
          </button>
          <button 
            className="close-btn"
            onClick={() => {}}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      </div>

      <div className="ai-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`ai-message ${msg.sender}`}>
            {msg.sender === 'ai' && <div className="ai-avatar">AI</div>}
            <div className="ai-message-content">
              <div className="ai-message-text">{msg.text}</div>
              <div className="ai-message-time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="ai-suggestions">
        <p>Quick suggestions:</p>
        <div className="ai-suggestion-chips">
          <button onClick={() => setInputValue('How do I update my billing info?')}>
            Update billing
          </button>
          <button onClick={() => setInputValue('Where can I download invoices?')}>
            Get invoices
          </button>
          <button onClick={() => setInputValue('I need help with my account')}>
            Account help
          </button>
        </div>
      </div>

      <div className="ai-input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          disabled={!inputValue.trim()}
          aria-label="Send message"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AICopilotPanel;