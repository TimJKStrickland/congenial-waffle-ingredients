import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class Pomodoro extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0"
    }
  }

  addTime(){

  }

  handleStart(){

  }


  render() {
    const { display } = this.state;
    return (
      <div>
        <Button onClick={this.addTime.bind(this)} id="zero">More Time</Button>
        <Button onClick={this.handleStart.bind(this)} id="one">Start</Button>
        <div id="display">{ display }</div>
      </div>
    )
  }
}
