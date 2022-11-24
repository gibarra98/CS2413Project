import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import ChatBody from './components/chatBody/ChatBody';
import io from "socket.io-client";
import { useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';

const socket = io.connect("ws://localhost:3000", {transports: ['websocket']});

function App() {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="App">
      {!showChat 
      ? (<div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
          />
          <input
            type="text"
            placeholder="Room ID..."
          />
          <button onClick="">Join A Room</button>
        </div>) 
      : (<Nav></Nav>,<ChatBody/>)}

    </div>
  );
}

export default App;
