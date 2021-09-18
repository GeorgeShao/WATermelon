import React, { Component } from "react";
import '../styles/header.css'

export default class Header extends Component {
  render() {
    return (
      <div className={"header"}>
        <h1 className={"headerTitle"}>WATermelon</h1>
      </div>
    );
  }
}
