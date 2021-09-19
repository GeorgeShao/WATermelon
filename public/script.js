const mlModelURL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let mic;
let pitch;
let freq = 0;

document.cookie = "five_seconds_done=f";

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function modelLoaded() {
  console.log(document.cookie)
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
  console.log(document.cookie);
  if (error) {
    console.error(error);
  } else {
    if (frequency) {
      freq = frequency;
      console.log(freq);
      if (parseInt(Date.now()) - parseInt(readCookie('time_started_recording')) > 5000) {
        document.cookie = "five_seconds_done=t";
      }
    }
    pitch.getPitch(gotPitch);
  }
}
