const mlModelURL =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let mic;
let pitch;
let freq = 0;

function modelLoaded() {
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
      console.log(freq);
    }
    pitch.getPitch(gotPitch);
  }
}
