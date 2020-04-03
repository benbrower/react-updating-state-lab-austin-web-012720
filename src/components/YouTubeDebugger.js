// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleClick = event => {
    if (event.target.className === "bitrate") {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      });
    }
    if (event.target.className === "resolution") {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
          }
        });
      }
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>
          Current Bitrate: {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.handleClick}>
          Current Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}
