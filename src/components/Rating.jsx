import React, { Component } from 'react'

export default class Rating extends Component {
    constructor(props){
        LOWEST_HERTZ: 129;
        HIGHEST_HERTZ: 172;
    }

    calculateScore() {
        var hertz = this.props.hertz_value;
        var score = ((hertz - this.state.LOWEST_HERTZ) / this.state.HIGHEST_HERTZ - this.state.LOWEST_HERTZ)*100;
        return score;
    }


    //improve score ranges after discussion
    getScoreText(score) {
        switch(score){
            case score>80:
                return 'amazing';
                break;
            case (score < 80 && score > 60):
                return 'very good';
                break;
            case (score < 60 && score > 40):
                return 'good';
                break;
            case (score < 40 && score > 20):
                return 'meh';
                break;
            case (score < 20 && score > 0):
                return 'bad';
                break;
            default:
                return 'not a real watermelon';
        }
    }

    render() {
        return (
            <div className={""}>

            </div>
        )
    }
}
