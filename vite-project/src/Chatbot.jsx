import React, { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);

    // Call your chatbot API (e.g., OpenAI, DeepSeek, etc.)
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          ...messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          })),
          { role: 'user', content: userInput }
        ]
      })
    });

    const data = await response.json();
    const botReply = data.choices[0]?.message?.content || 'Sorry, I didn’t get that.';

    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    setUserInput('');
  };

  return (

    <div>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#00804D',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        <button 
        style={{ 
          fontSize: '16px', 
          padding: '8px 16px',
          width: '150%', 
          backgroundColor: '#00804D', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        Ask Me Anything
      </button>

      </div>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '320px',
          maxHeight: '400px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 1000,
        }}>
          <div style={{
            padding: '10px',
            backgroundColor: '#00804D',
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            AI Chat Assistant
          </div>

          <div style={{
            flex: 1,
            padding: '10px',
            overflowY: 'auto',
            fontSize: '0.9rem'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: '10px'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '8px 12px',
                  backgroundColor: msg.sender === 'user' ? '#e0f7e9' : '#f1f1f1',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  wordWrap: 'break-word'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me something..."
              style={{
                flex: 1,
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                marginRight: '5px'
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              style={{
                background: '#00804D',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 12px',
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
