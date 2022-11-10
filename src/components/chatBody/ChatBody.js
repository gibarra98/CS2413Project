import React, { Component } from "react";
import "./ChatBody.css";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/userProfile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="chatBody">
        <ChatContent />
        <UserProfile />
      </div>
    );
  }
}