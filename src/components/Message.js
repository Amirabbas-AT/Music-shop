import React from "react";
import "./Message.css"; 


const Message = ({ children }) => {
  return (
    <div className="message-container">
      
      <div className="message-box">
        {children}
      </div>
    </div>
  );
};

export default Message;
