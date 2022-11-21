import React, { Component, useState, createRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import "./chatContent.css";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  importNewMessage(message) {
    this.chatItms.push({
      key: 1,
      type: "",
      msg: message,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    })
  }

  addNewMessage = () => {
    this.chatItms.push({
      key: 1,
      type: "",
      msg: this.state.msg,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    })
  }

  onButtonClick = (e) => {
    if (this.state.msg != "") {
      this.chatItms.push({
        key: 1,
        type: "",
        msg: this.state.msg,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      });
      this.setState({ chat: [...this.chatItms] });
      this.scrollToBottom();
    }
  }

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <p>Secret Chat</p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
          </div>
          <div ref={this.messagesEndRef} />
        </div>
        <div className="content__footer">
          <form className="sendNewMessage" id='chat-form'>
            <input
              id = "msg"
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" onClick={this.onButtonClick}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    );
  }
}