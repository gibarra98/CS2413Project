import React, {useState, createRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import "./chatContent.css";
import ChatItem from "./ChatItem";
import { DoDecrypt, DoEncrypt } from "../../aes.js";
import { useDispatch } from "react-redux";
import {getValue} from "@testing-library/user-event/dist/utils";
window.Buffer = window.Buffer || require("buffer").Buffer;

function ChatContent ({ socket, username, room }) {
  let key = 0;


  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const sendMessage = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (message !== "") {
    //encryption
    const ans = DoEncrypt(message);
      const messageData = {
        message: ans,
        type: "",
        username: username, 
        room: room
      }
      await socket.emit("send_message", messageData);
    }
  }

  const addMessage = (data) => {
    if (data !== "") {
      const messageFrom = data.username === username ? "" : "other"
      setChat((list) => [...list, {
        key: key,
        type: messageFrom,
        msg: data.message,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      }]);
      key++;
      // scrollToBottom();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === 'Enter') {
        var input = document.getElementById("msg")
        input.value = "";
      }
    })

    socket.off("receive_message").on("receive_message", (message) => {
      const messageFrom = message.username === username ? "" : "other"

      //decrypting the message
      const rec = DoDecrypt(message.message);

      console.log(message);
      setChat((list) => [...list, {
        key: key,
        type: messageFrom,
        msg: rec,
      }]);
    });

    // scrollToBottom();
  }, [socket]);

  const onStateChange = (e) => {
    setMessage(e.target.value);
  };

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
            {chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type}
                  msg={itm.msg}
                />
              );
            })}
          </div>
          {/* <div ref={messagesEndRef} /> */}
        </div>
        <div className="content__footer">
          <form className="sendNewMessage" id='chat-form'>
            <input
              id = "msg"
              type="text"
              placeholder="Type a message here"
              onChange={onStateChange}
              value={message}
            />
            <button className="btnSendMsg" onClick={sendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    );
}
export default ChatContent;