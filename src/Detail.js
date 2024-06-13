import React, { useState } from 'react';
import './App.css';
//该地方有待改进
import mineImg from './photo/0.jpg';
import Img1 from './photo/1.jpg';
import Img2 from './photo/2.jpg';
import Img3 from './photo/3.jpg';
import Img4 from './photo/4.jpg';

function Detail()
{
  const [selectedContact, setSelectedContact] = useState(null);//联系人
  //消息存储 - 发送和接受消息
  const [messages, setMessages] = useState({
    1: [
      { text: 'Hello Alice!', sender: 'received', timestamp: '2024-06-01T12:00:00Z' },
      { text: 'How are you?', sender: 'sent', timestamp: '2024-06-01T12:01:00Z' }
    ],
    2: [
      { text: 'Hi Bob!', sender: 'received', timestamp: '2024-06-01T12:02:00Z' },
      { text: 'What\'s up?', sender: 'sent', timestamp: '2024-06-01T12:03:00Z' }
    ],
    3: [
      { text: 'Hey Charlie!', sender: 'received', timestamp: '2024-06-01T12:04:00Z' },
      { text: 'Long time no see!', sender: 'sent', timestamp: '2024-06-01T12:05:00Z' }
    ],
    4: [
      { text: 'Oh, D are handsome!', sender: 'received', timestamp: '2024-06-01T15:04:00Z' },
      { text: 'Thank you!', sender: 'sent', timestamp: '2024-06-01T15:15:00Z' }
    ],
  });
  const [inputValue, setInputValue] = useState('');//发送框

  const contacts = [
    { id: 1, name: '小A', imgUrl: Img1},
    { id: 2, name: '小B', imgUrl: Img2},
    { id: 3, name: '小C', imgUrl: Img3},
    { id: 4, name: '小D', imgUrl: Img4},
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() === '' || selectedContact === null) return;
    const newMessages = { ...messages };
    const timestamp = new Date().toISOString();
    newMessages[selectedContact] = [...newMessages[selectedContact], { text: inputValue, sender: 'sent', timestamp }];
    setMessages(newMessages);
    setInputValue('');
  };

  return (
    <div className="app-container">
      
      <nav className="sidebar">
        <ul>
           <img src={mineImg} alt='Mine' className="contact-avatar-mine"/>我是小E
        </ul>
        <h2>联系人列表</h2>
        <ul>
          {contacts.map(contact => (
            <li
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={selectedContact === contact.id ? 'selected' : ''}
            >
              <img src={contact.imgUrl} alt={contact.name} className="contact-avatar"/>
              {contact.name}
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        {selectedContact ? (
          <div>
            <h2>{contacts.find(contact => contact.id === selectedContact).name} chat area</h2>
            <div className="messages" >
              {messages[selectedContact].map((message, index) => (
                 <div key={index} className={message.sender === 'sent' ? 'message-sent':'message-received'}>
                   <p className="message-text">{message.text}</p>
                   <p className="message-time">{new Date(message.timestamp).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="please type your message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) : (
          <div>Please select a contact to start chatting</div>
        )}
      </main>

    </div>
  );
}

export default Detail;