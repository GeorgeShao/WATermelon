import React, { Component } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import background from "../media/background.png";
import LoadingScreen from "../components/LoadingScreen";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recordedStarted: false,
    };
    this.startRecording = this.startRecording.bind(this);
  }

  startRecording() {
    this.setState({
      recordedStarted: true,
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100vw",
          height: "100wh",
          // backgroundI0mage: `url(${background})`
        }}
      >
        {/* <Rating hertzValue={150} /> */}
        <br />
        {this.state.recordedStarted ? (
          <Loading />
        ) : (
          // <Rating hertzValue={150} />
          <Button recordedStarted={this.startRecording} />
        )}
      </div>
    );
  }
}

export default Page;
