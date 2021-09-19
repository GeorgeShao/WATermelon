import React, { Component } from "react";
import '../styles/rating.css';
import background from "../media/ratingBackground.png";

export default class Rating extends Component {
  constructor(props) {
    super();
    this.state = {
      //should maybe be 129 and 172 but just in case better ones exist
      LOWEST_HERTZ: 120,
      HIGHEST_HERTZ: 180,
      HERTZ_DIFFERENCE: 60, //bad but not sure how to do this automatically
    };
  }

  calculateScore() {
    var hertz = this.props.hertzValue;
    var score =
      Math.round(((hertz - this.state.LOWEST_HERTZ) / this.state.HERTZ_DIFFERENCE) * 100 * 100) / 100;
    return score;
  }

  getScoreText(score) {
    console.log(score >= 20);
    if (score > 100){
      return 'This is not a valid watermelon';
    } else if (score >= 80) {
      return "Amazing";
    } else if (score < 80 && score >= 60) {
      return "Very good";
    } else if (score < 60 && score >= 40) {
      return "Good";
    } else if (score < 40 && score >= 20) {
      return "Meh";
    } else if (score < 20 && score >= 0) {
      return "Bad";
    } else {
      return "This is not a valid watermelon";
    }
  }

  render() {
    var score = this.calculateScore();
    var scoreSentence = this.getScoreText(score);
    var yourScore = "Your score is:"
    return (
      <div className={"ratingBox"} style={{
        margin: "10em auto",
        backgroundImage: `url(${background})`
      }}>
        <span className={"ratingText"}>
        {yourScore} {score}
        <br />
        {scoreSentence}
        </span>
      </div>
    );
  }
}
