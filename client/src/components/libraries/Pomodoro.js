import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

export default class Pomodoro extends Component {
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 0,
    }
  }

  addTime(){}
  resetAll(){}
  handleStart(){}
  decreaseTime(time){}
  increaseTime(time){}


  render() {
    const { breakLength, sessionLength, timeLeft } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Row centered columns='equal'>
            <Grid.Column>
              <h2 id="break-label">Break Length</h2>
                  <Button onClick={this.decreaseTime('break')} id="break-decrement">-</Button>
                  <h3 id="break-length">{ breakLength }</h3>
                  <Button onClick={this.increaseTime('break')} id="break-increment">+</Button>
            </Grid.Column>
            <Grid.Column>
              <h2 id="session-label">Session Length</h2>
              <Button onClick={this.decreaseTime('session')} id="session-decrement">-</Button>
              <h3 id="session-length">{sessionLength }</h3>
              <Button onClick={this.increaseTime('session')} id="session-increment">+</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h2 id="timer-label">Timer:</h2>
              <h3 id="time-left">{sessionLength }</h3>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={this.handleStart.bind(this)} id="start_stop">Start</Button>
              <Button onClick={this.resetAll.bind(this)} id="Reset">Reset</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div id="session-length">{ sessionLength }</div>
              <audio src="" id="beep"></audio>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}