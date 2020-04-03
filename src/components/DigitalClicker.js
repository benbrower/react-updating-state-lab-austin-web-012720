// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(
      previousState => {
        return {
          timesClicked: previousState.timesClicked + 1
        };
      },
      () => console.log(this.state.timesClicked)
    );
  };

  render() {
    return (
      <button label={this.state.timesClicked} onClick={this.handleClick}>
        Clicks: {this.state.timesClicked}
      </button>
    );
  }
}
