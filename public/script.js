const mlModelURL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let mic;
let pitch;
let freq = 0;
let freqs = [];

const setCookie = (name, value, days = 7, path = "/") => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=" +
    path;
};

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
};

const deleteCookie = (name, path) => {
  setCookie(name, "", -1, path);
};

setCookie("five_seconds_done", "t");
deleteCookie("average_freq", "")
deleteCookie("freqs");

function modelLoaded() {
  console.log(document.cookie);
  console.log("ml model loaded");
  pitch.getPitch(gotPitch);
}

function setup() {
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

function listening() {
  console.log("ml pitch dectection listening");
  pitch = ml5.pitchDetection(mlModelURL, audioContext, mic.stream, modelLoaded);
}

function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    if (frequency) {
      freq = frequency;
      if (129 <= parseInt(freq) <= 172) {
        if (getCookie("five_seconds_done") === "f") {
          freqs.push(freq);
          setCookie("freqs", freqs)
          if (
            parseInt(Date.now()) -
              parseInt(getCookie("time_started_recording")) >
            5000
          ) {
            setCookie("five_seconds_done", "t");
            setCookie(
              "average_freq",
              freqs.reduce((a, b) => a + b, 0) / freqs.length
            );
            setCookie("freqs", freqs)
          }
          console.log("REC", freq, document.cookie);
        } else {
          console.log("PRE/POS", freq, document.cookie);
        }
      }
    }
    pitch.getPitch(gotPitch);
  }
}
