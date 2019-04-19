import React, {Component} from "react";
import messageStyle from "./message.module.css";

class Message extends Component {
  render() {
    return (
      <div className={messageStyle.message_container}>
        <h1>Message</h1>
      </div>
    );
  }
}

export default Message;
