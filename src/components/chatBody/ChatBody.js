import React, { Component } from "react";
import "./ChatBody.css";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/userProfile";

function ChatBody ({socket, username, room}) {
    return (
      <div className="chatBody">
        <ChatContent socket={socket} username={username} room={room}/>
        <UserProfile username={username} />
      </div>
    );
}

export default ChatBody;