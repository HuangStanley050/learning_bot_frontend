import React, {Component} from "react";
import messageStyle from "./message.module.css";
import Cookies from "universal-cookie";
import {Input, InputGroup, InputGroupAddon} from "reactstrap";
import {connect} from "react-redux";
import {record_user_msg, start_text_query} from "../store/actions/actions";
const cookies = new Cookies();

class Message extends Component {
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
        <h1>Message</h1>
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

export default connect(
  null,
  mapDispatchToProps
)(Message);
