import React, { Component } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Rating from "../components/Rating";
import background from "./img/placeholder.png";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recordingDone: false,
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100vw",
          height: "100wh",
          backgroundImage: `url(${background})`
        }}
      >
        {/* <Rating hertzValue={150} /> */}
        {this.state.recordingDone ? <Rating /> : <Button />}
      </div>
    );
  }
}

export default Page;
