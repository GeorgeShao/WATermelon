import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import Cookies from "js-cookie";

function Page() {
  const [recordedStarted, setRecordedStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const startRecording = () => {
    setRecordedStarted(true);
    Cookies.set('five_seconds_done', 'f')
    Cookies.set('time_started_recording', Date.now())
  }

  useEffect(() => {
    console.log("TIMER")
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 250);
    
    return () => clearInterval(interval);
  }, [Cookies.get('freqs'), timer]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100vw",
        height: "100wh",
      }}
    >
      {recordedStarted === false ? (
        <Button onClicked={startRecording}/>
      ) : null}
      {recordedStarted === true &&
      Cookies.get("five_seconds_done") === "f" ? (
        <Loading />
      ) : null}
      {recordedStarted === true &&
      Cookies.get("five_seconds_done") === "t" ? (
        <Rating hertzValue={Cookies.get("average_freq")}/>
      ) : null}
    {/* </div>   */}
        {/* {Cookies.get('five_seconds_done')}
        {this.state.recordedStarted === false ? (<Button recordedStarted={this.startRecording} />) : null}
        {this.state.recordedStarted === true && Cookies.get('five_seconds_done') == "f" ? (<Loading />) : null}
        {this.state.recordedStarted === true && Cookies.get('five_seconds_done') == "t" ? (<Rating />) : null} */}
    </div>
  );
}

export default Page;
