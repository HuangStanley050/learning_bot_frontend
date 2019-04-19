import React, {Component} from "react";
import logo from "./logo.svg";
import appStyle from "./App.module.css";
import {Navbar, NavbarBrand} from "reactstrap";
import Message from "./components/message";

class App extends Component {
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
