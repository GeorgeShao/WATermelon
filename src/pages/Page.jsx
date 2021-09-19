import React from "react";
import Button from "../components/Button";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import background from "../media/ratingBackground.png";
import LoadingScreen from "../components/LoadingScreen";
import Cookies from "js-cookie";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recordedStarted: false,
      displayButton: true,
      displayLoad: false,
      displayRating: false,
      recordedFinished: false,  
      irrelevantBoolean:
    };
    this.startRecording = this.startRecording.bind(this);
  }

  displayButton() {
    this.setState({
      displayRating: false,
      displayButton: true,
    })
  }

  displayLoad() {
    this.setState({
      displayButton: false,
      displayLoad: true,
    })
  }

  displayRating() {
    this.setState({
      displayLoad: false,
      displayRating: true,
    })
  }

  startRecording() {
    this.setState({
      recordedStarted: true,
    });
    Cookies.set('five_seconds_done', 'f')
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
        {Cookies.get("abc")}
        {/* <Rating hertzValue={150} /> */}
        <br />
        {/* {this.state.recordedStarted ? (
          <Loading />
        ) : (
          // <Rating hertzValue={150} />
          <Button onClicked={this.startRecording} />
        )} */}
        {Cookies.get("five_seconds_done")}
        {this.state.recordedStarted === false ? (
          <Button onClicked={this.startRecording} />
        ) : null}
        {this.state.recordedStarted === true &&
        Cookies.get("five_seconds_done") === "f" ? (
          <Loading runOnComplete={this.displayRating}/>
        ) : null}
        {this.state.recordedStarted === true &&
        Cookies.get("five_seconds_done") === "t" ? (
          <Rating hertzValue={150} returnButton={this.displayButton}/>
        ) : null}
        {/* {this.state.displayButton ? 
          <Button onClicked={this.startRecording} />
          :
          <div></div>
        }

        {this.state.displayLoad ? (
          <Loading runOnComplete={this.displayRating} />
        ) :
          <div></div>
        }

        {this.state.displayRating ? (
          <Rating hertzValue={150} returnButton={this.displayButton}/>
        ) :
          <div></div>
        } */}
        {/* {Cookies.get('five_seconds_done')}
        {this.state.recordedStarted === false ? (<Button recordedStarted={this.startRecording} />) : null}
        {this.state.recordedStarted === true && Cookies.get('five_seconds_done') == "f" ? (<Loading />) : null}
        {this.state.recordedStarted === true && Cookies.get('five_seconds_done') == "t" ? (<Rating />) : null} */}
      </div>
    );
  }
}

export default Page;
