import React, { useState } from 'react';
import './ChatSupport.css';

function ChatSupport() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        setMessages([...messages, input]);
        setInput('');
    };

    return (
        <div className="chat-support">
            <h2>AI Chat Support</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default ChatSupport;
