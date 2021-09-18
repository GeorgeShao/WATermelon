import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "35vh 40vw",
          alignItems: "center",
        }}
      >
        <button style={{ margin: "0 auto" }} id="recordingbutton">
          Start Recording
        </button>
      </div>
    );
  }
}
