import React, { Component } from "react";
import Button from "../components/Button";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import background from "../media/ratingBackground.png";
import LoadingScreen from "../components/LoadingScreen";
import Cookies from 'js-cookie';

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
    Cookies.set('foo', 'bar')
    Cookies.set('time_started_recording', Date.now())
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100vw",
          height: "100wh",
          // backgroundImage: `url(${background})`,
        }}
      >
        {Cookies.get('abc')}
        {/* <Rating hertzValue={150} /> */}
        <br />
        {this.state.recordedStarted ? (
          <Loading />
        ) : (
          // <Rating hertzValue={150} />
          <Button recordingStarted={this.startRecording} />
        )}
        {Cookies.get('five_seconds_done')}
        {this.state.recordedStarted === false ? (<Button recordedStarted={this.startRecording} />) : null}
        {this.state.recordedStarted === true && Cookies.get('five_seconds_done') == "f" ? (<Loading/>) : null}
        {this.state.recordedStarted === true && Cookies.get('five_seconds_done') == "t" ? (<Rating/>) : null}
      </div>
    );
  }
}

export default Page;
