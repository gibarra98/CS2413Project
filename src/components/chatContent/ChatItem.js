import React from "react";

function ChatItem({user, msg})  {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${user ? user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{msg}</div>
          <div className="chatMeta">
          </div>
        </div>
      </div>
    );
}

export default ChatItem;