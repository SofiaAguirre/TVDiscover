import React, { Component } from "react";
import logo from "./img/logo.png";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-background">
          <div className="container flex">
            <img src={logo} alt="logo" className="logo"></img>
            <p className="headerText">DiscoverTV</p>
          </div>
        </div>
        <Navbar/>
      </React.Fragment>
    );
  }
}

export default Header;
