import React, {Component} from "react";
import messageStyle from "./message.module.css";
import Cookies from "universal-cookie";
import {Input, InputGroup, InputGroupAddon} from "reactstrap";
import {connect} from "react-redux";
import {record_user_msg, start_text_query} from "../store/actions/actions";
import UserResponse from "./userResponse";
import BotResponse from "./botResponse";

const cookies = new Cookies();

class Message extends Component {
  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({behavior: "smooth"});
  }
  state = {
    userInput: ""
  };
  inputHandler = e => {
    this.setState({userInput: e.target.value});
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.storeUserMsg({text: this.state.userInput, who: "user"});
    this.props.sendQuestion({
      text: this.state.userInput,
      userID: cookies.get("userID")
    });
    this.setState({userInput: ""});
  };
  render() {
    return (
      <div className={messageStyle.message_container}>
        {this.props.messages.map((msg, i) => {
          if (msg.hasOwnProperty("who")) {
            return <UserResponse key={i} text={msg.text} />;
          } else {
            return <BotResponse key={i} text={msg.text.text} />;
          }
        })}
        <div
          ref={el => {
            this.messagesEnd = el;
          }}
        />
        <form onSubmit={this.submitHandler}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Enquiry</InputGroupAddon>
            <Input
              value={this.state.userInput}
              onChange={this.inputHandler}
              placeholder="type in your question"
            />
          </InputGroup>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeUserMsg: message => dispatch(record_user_msg(message)),
    sendQuestion: question => dispatch(start_text_query(question))
  };
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
