import React, { useState } from 'react';
import './App.css';
import AICopilotPanel from './AICopilotPanel';

const ChatLayout = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [reply, setReply] = useState('');

  const chats = [
    {
      id: 1,
      name: "Luis - Github",
      preview: "Hey! I have a question...",
      time: "45m",
      avatar: "https://i.pravatar.cc/150?img=1",
      messages: [
        { sender: "Luis Easton", text: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened." },
        { sender: "Timin", text: "Let me just look into this for you, Luis." },
        { sender: "Timin", text: "Seen", isSeen: true }
      ]
    },
    {
      id: 2,
      name: "Sarah - Support",
      preview: "Having trouble with my account",
      time: "2h",
      avatar: "https://i.pravatar.cc/150?img=5",
      messages: [
        { sender: "Sarah Johnson", text: "Hi, I can't log into my account. It says my password is incorrect but I'm sure I'm using the right one." },
        { sender: "Timin", text: "Hi Sarah, let me check your account status." }
      ]
    },
    {
      id: 3,
      name: "Mike - Billing",
      preview: "Invoice question from last month",
      time: "1d",
      avatar: "https://i.pravatar.cc/150?img=7",
      messages: [
        { sender: "Mike Peterson", text: "Hello, I noticed a discrepancy in my invoice from last month. Can you clarify the charges?" },
        { sender: "Timin", text: "Sure Mike, which specific charges are you referring to?" }
      ]
    },
    {
      id: 4,
      name: "Emma - Sales",
      preview: "Interested in enterprise plan",
      time: "3d",
      avatar: "https://i.pravatar.cc/150?img=9",
      messages: [
        { sender: "Emma Wilson", text: "Hi there! We're considering upgrading to your enterprise plan. Can you send me more details?" },
        { sender: "Timin", text: "Absolutely Emma! I'll send you the information package right away." }
      ]
    },
    {
      id: 5,
      name: "David - Technical",
      preview: "Bug report in dashboard",
      time: "5d",
      avatar: "https://i.pravatar.cc/150?img=11",
      messages: [
        { sender: "David Kim", text: "There appears to be a bug in the analytics dashboard. Charts aren't rendering correctly." },
        { sender: "Timin", text: "Thanks for reporting David. Our team is looking into this issue." }
      ]
    },
    {
      id: 6,
      name: "Priya - Feedback",
      preview: "Feature suggestion",
      time: "1w",
      avatar: "https://i.pravatar.cc/150?img=13",
      messages: [
        { sender: "Priya Patel", text: "I love your product! Would it be possible to add dark mode in the next update?" },
        { sender: "Timin", text: "Great suggestion Priya! I've forwarded this to our product team." }
      ]
    },
    {
      id: 7,
      name: "James - API",
      preview: "Documentation clarification",
      time: "2w",
      avatar: "https://i.pravatar.cc/150?img=15",
      messages: [
        { sender: "James Carter", text: "The API documentation for the webhook endpoints seems incomplete. Can you provide more details?" },
        { sender: "Timin", text: "I'll have our technical writer update those sections. Thanks for pointing this out!" }
      ]
    }
  ];

  const active = chats[activeChat];

  const handleSend = () => {
    if (!reply.trim()) return;
    alert(`Sending message: ${reply}`);
    setReply('');
  };

  return (
    <div className="container" style={{ maxWidth: 1200, margin: '0 auto', height: '100vh', display: 'flex', border: '1px solid #ddd' }}>
      <aside className="conversation-sidebar" style={{ width: 320, borderRight: '1px solid #ddd', display: 'flex', flexDirection: 'column' }}>
        <div className="sidebar-header" style={{ padding: 16, borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
          <h2 className="inbox-title" style={{ margin: 0 }}>Inbox</h2>
          <div className="inbox-filters" style={{ marginTop: 8, display: 'flex', gap: 12 }}>
            <div className="filter active-filter" style={{ cursor: 'pointer' }}>
              <span>{chats.length} Open</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <div className="filter" style={{ cursor: 'pointer' }}>
              <span>Waiting longest</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
        </div>

        <div className="conversations" style={{ flex: 1, overflowY: 'auto' }}>
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              className={`conversation ${index === activeChat ? 'active' : ''}`}
              onClick={() => setActiveChat(index)}
              style={{
                cursor: 'pointer',
                padding: 12,
                borderBottom: '1px solid #eee',
                backgroundColor: index === activeChat ? '#e6f0ff' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <img
                className="chat-avatar"
                src={chat.avatar}
                alt="avatar"
                style={{ width: 40, height: 40, borderRadius: '50%' }}
              />
              <div className="conversation-text" style={{ flex: 1 }}>
                <div className="conversation-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span className="contact-name">{chat.name}</span>
                  <span className="message-time" style={{ fontSize: 12, color: '#999' }}>{chat.time}</span>
                </div>
                <div className="conversation-preview" style={{ fontSize: 13, color: '#333' }}>{chat.preview}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="chat-display" style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <header
          className="chat-header"
          style={{
            padding: 16,
            borderBottom: '1px solid #ddd',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
          }}
        >
          <div className="chat-header-left" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              className="avatar"
              src={active.avatar}
              alt="Avatar"
              style={{ width: 40, height: 40, borderRadius: '50%' }}
            />
            <span className="chat-partner-name" style={{ fontWeight: 'bold', fontSize: 18 }}>
              {active.name}
            </span>
          </div>
        </header>

        {active.messages ? (
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {active.messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.sender === 'Timin' ? 'agent' : 'customer'} ${msg.isSeen ? 'seen-message' : ''}`}
                style={{
                  alignSelf: msg.sender === 'Timin' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'Timin' ? '#d0eaff' : '#f1f1f1',
                  padding: 12,
                  borderRadius: 8,
                  maxWidth: '70%',
                  fontSize: 14,
                  color: '#333',
                }}
              >
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 18,
              color: '#666',
            }}
          >
            No messages in this conversation.
          </div>
        )}

        <div
          className="chat-controls"
          style={{
            padding: 16,
            borderTop: '1px solid #ddd',
            backgroundColor: '#f5f5f5',
          }}
        >
          <div
            className="chat-input"
            style={{ display: 'flex', gap: 8 }}
          >
            <input
              type="text"
              placeholder={`Reply to ${active.name.split('-')[0].trim()}...`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              style={{
                flex: 1,
                padding: 10,
                fontSize: 16,
                borderRadius: 6,
                border: '1px solid #ccc',
                outline: 'none',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
            />
            <button
              className="send-button"
              onClick={handleSend}
              style={{
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: 6,
                padding: '0 16px',
                color: 'white',
                fontSize: 20,
                cursor: 'pointer',
              }}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
          <div
            className="chat-footer"
            style={{
              marginTop: 8,
              fontSize: 14,
              color: '#666',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>Chat</span>
            <span className="shortcut-info">⌘K for shortcuts</span>

            <div className="app">
      {/* Your other components */}
      <AICopilotPanel />
    </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatLayout;
