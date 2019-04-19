import React, {Component} from "react";
import logo from "./logo.svg";
import Cookies from "universal-cookie";
import {v4 as uuid} from "uuid";
import appStyle from "./App.module.css";
import {Navbar, NavbarBrand} from "reactstrap";
import Message from "./components/message";
const cookies = new Cookies();
class App extends Component {
  componentDidMount() {
    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), {path: "/"});
    }
    //console.log(cookies.get("userID"));
  }
  render() {
    return (
      <div className={appStyle.appBackground}>
        <Navbar style={{backgroundColor: "white"}}>
          <NavbarBrand style={{margin: "0 auto"}}>Wiki Bot</NavbarBrand>
        </Navbar>
        <Message />
      </div>
    );
  }
}

export default App;
