import React, {useState, createRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import "./chatContent.css";
import ChatItem from "./ChatItem";

function ChatContent () {
  // const messagesEndRef = createRef(null);
  let key = 0;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     chat: this.chatItms,
  //     msg: "",
  //   };
  // }

  const [chat, setChat] = useState([]);
  const [msg, setMessage] = useState("");

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const importNewMessage = (message)  => {
  //   chatItms.push({
  //     key: key,
  //     type: "",
  //     msg: message,
  //     image:
  //       "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
  //   })
  //   key++;
  // }

  // const addNewMessage = () => {
  //   chatItms.push({
  //     key: key,
  //     type: "",
  //     msg: msg,
  //     image:
  //       "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
  //   })
  //   key++;
  // }

  const onButtonClick = (e) => {
    e.preventDefault();
    if (msg !== "") {
      setChat((list) => [...list, {
        key: key,
        type: "",
        msg: msg,
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
        // if (msg != "") {
        //   chatItms.push({
        //     key: key,
        //     type: "",
        //     msg: msg,
        //   });
        //   key++;
        //   setChat(chatItms);
        //   // scrollToBottom();
        //   setMessage("");
        // }
        console.log(chat);

      }
    });

    // scrollToBottom();
  });

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
                  user={itm.type ? itm.type : "me"}
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
              value={msg}
            />
            <button className="btnSendMsg" onClick={onButtonClick}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    );
}
export default ChatContent;