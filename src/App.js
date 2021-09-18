import React, { Component } from "react";
import Header from "./components/Header";
import Page from "./pages/Page";
import "./App.css";
import "./styles/style.css";
import "./styles/button.css";

export default class App extends Component {
  render() {
    return (
      <div classname="App">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Header />
          <Page />
        </div>
      </div>
    );
  }
}
