import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super();
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    //will start recording process once we're further
    console.log("asdasd");
    this.props.recordingDone();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          /*justifyContent: "center",*/
          padding: "35vh 40vw",
          /*alignItems: "center",*/
        }}
      >
        <button style={{ margin: "0 auto" }} onClick={this.clicked}>
          Start Recording
        </button>
      </div>
    );
  }
}
