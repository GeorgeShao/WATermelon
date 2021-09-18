import React, { Component } from "react";

export default class Rating extends Component {
  constructor(props) {
    super();
    this.state = {
      //should maybe be 129 and 172 but just in case better ones exist
      LOWEST_HERTZ: 120,
      HIGHEST_HERTZ: 200,
      HERTZ_DIFFERENCE: 80, //bad but not sure how to do this automatically
    };
  }

  calculateScore() {
    var hertz = this.props.hertzValue;
    var score =
      ((hertz - this.state.LOWEST_HERTZ) / this.state.HERTZ_DIFFERENCE) * 100;
    return score;
  }

  //TODO: improve score ranges after discussion
  //switch case is better but not worth swapping over
  getScoreText(score) {
    console.log(score >= 20);
    if (score >= 80) {
      return "amazing";
    } else if (score < 80 && score >= 60) {
      return "very good";
    } else if (score < 60 && score >= 40) {
      return "good";
    } else if (score < 40 && score >= 20) {
      return "meh";
    } else if (score < 20 && score >= 0) {
      return "bad";
    } else {
      return "not a real watermelon";
    }
  }

  render() {
    var score = this.calculateScore();
    var scoreSentence = this.getScoreText(score);
    return (
      <div className={"ratingBox"}>
        {score}
        <br />
        {scoreSentence}
      </div>
    );
  }
}
