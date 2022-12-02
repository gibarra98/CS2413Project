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

const socket = io.connect("ws://" + document.location.hostname + ":3001", {transports: ['websocket']});

function App() {
  const [showChat, setShowChat] = useState(false);
  const [username, setUsername] = useState("");
  const [roomCodeEntered, setRoomCode] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const roomCode = "password";

  const joinRoom = () => {
    socket.emit("join_room", roomCode);
  }


  const onUserChange = (e) => {
    setUsername(e.target.value);
  };

  const onRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
  };

  const validateUser = (username, roomCode) =>{
    if(username !== ""){
      if(roomCode !== ""){
        console.log("here");
        allowedUsers.forEach((user, i) => {
          if(user === username){
            if(roomCodeEntered === roomCode){
              setShowChat(true);
              joinRoom();
            }
            else{
              console.log("log");
              setInvalidInput(true);
            }
          }
          else{
            setInvalidInput(true);
          }
        });
      }
      else{
        setInvalidInput(true);
      }
    }
    else{
      setInvalidInput(true);
    }
  }

  const allowedUsers = ["gab", "jacob", "justin"];

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
              onChange={onUserChange}
            />
          </div>
          <div className='inputBlock'>
            <FontAwesomeIcon icon={faLock} />
            <input
          className='roomCode'
            type="text"
            placeholder="Room Code"
            onChange={onRoomCodeChange}
          />
          </div>
         {invalidInput 
         ?  <div className='errorMessage'>
         You have entered invalid credentials.
            </div> 
         : <div className='errorMessage' style={{margin:"40px", width: "200px"}}>
            </div> } 
          <button onClick={()=>{
            validateUser(username, roomCode);
          }}>Join A Room</button>
        </div></div>) 
      : (<React.Fragment><Nav></Nav>
      <ChatBody socket={socket} username={username} room={roomCode}></ChatBody></React.Fragment>)}
    </div>
  );
}

export default App;
