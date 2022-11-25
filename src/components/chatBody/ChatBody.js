import React, { Component } from "react";
import "./ChatBody.css";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/userProfile";

function ChatBody ({socket}) {
    return (
      <div className="chatBody">
        <ChatContent socket={socket}/>
        <UserProfile />
      </div>
    );
}

export default ChatBody;