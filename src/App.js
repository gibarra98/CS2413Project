import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import ChatBody from './components/chatBody/ChatBody';
import io from "socket.io-client";

const socket = io.connect("ws://localhost:3000", {transports: ['websocket']});

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ChatBody></ChatBody>
    </div>
  );
}

export default App;
