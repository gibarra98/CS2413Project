import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import ChatBody from './components/chatBody/ChatBody';
import io from "socket.io-client";
import React, { useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const socket = io.connect("ws://localhost:3000", {transports: ['websocket']});

function App() {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="App">
      {!showChat 
      ? (<div className="joinChatContainer">
          <div>
          <h3>Join A Chat</h3>
          <div className='inputBlock'>
              <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Username"
            />
          </div>
          <div className='inputBlock'>
            <FontAwesomeIcon icon={faLock} />
            <input
          className='roomCode'
            type="text"
            placeholder="Room Code"
          />
          </div>
          <button onClick={()=>{
            setShowChat(true);
          }}>Join A Room</button>
        </div></div>) 
      : (<React.Fragment><Nav></Nav>
      <ChatBody></ChatBody></React.Fragment>)}

    </div>
  );
}

export default App;
