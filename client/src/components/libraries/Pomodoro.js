import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class Pomodoro extends Component {
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 0,
    }
  }

  addTime(){

  }

  handleStart(){

  }


  render() {
    const { display, breakLength, sessionLength, timeLeft } = this.state;
    return (
      <div>
        <Button onClick={this.addTime.bind(this)} id="zero">More Time</Button>
        <Button onClick={this.addTime.bind(this)} id="Reset">Reset</Button>
        <Button onClick={this.handleStart.bind(this)} id="start_stop">Start</Button>
        <Button onClick={this.handleStart.bind(this)} id="break-label">Break Length</Button>
        <Button onClick={this.handleStart.bind(this)} id="session-label">Session Length</Button>
        <Button onClick={this.handleStart.bind(this)} id="timer-label">Timer:</Button>
        <Button onClick={this.handleStart.bind(this)} id="time-left">{ timeLeft }</Button>
        <Button onClick={this.handleStart.bind(this)} id="break-decrement">- 5</Button>
        <Button onClick={this.handleStart.bind(this)} id="break-increment">+ 5</Button>
        <Button onClick={this.handleStart.bind(this)} id="session-decrement">- 5</Button>
        <Button onClick={this.handleStart.bind(this)} id="session-increment">+ 5</Button>
        <div id="break-length">{ breakLength }</div>
        <div id="session-length">{ sessionLength }</div>
        <audio src="" id="beep"></audio>
      </div>
    )
  }
}
