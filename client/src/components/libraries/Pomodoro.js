import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

export default class Pomodoro extends Component {
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      timerIsRunning: false,
      timerType: 'session',
    }
  }

  resetAll(){
    this.setState({
      timerIsRunning: false,
      breakLength: 300,
      sessionLength: 1500
    })
  }

  tick(){
    this.setState(state =>{
      return {
        timeLeft: state.timeLeft - 1
      }
    })
  }

  switchTimer(){
    const { breakLength, timerType, timeLeft } = this.state;
    if(timerType === 'session' && timeLeft < 0){
      this.setState({
        timerType: 'break',
        timeLeft: breakLength * 60
      })
    }

  }

  runTimer(){
    setInterval(()=>{
      this.setState(state => {
        return {
          timeLeft: state.timeLeft - 1
        }
      })
    }, 1000)
  }

  stopTimer(){
    clearInterval(this.runTimer())
  }

  handleStartStop(){
    const { timerIsRunning } = this.state;
    if(timerIsRunning){
      this.setState({
        timerIsRunning: false
      })
      this.stopTimer();
    } else {
        this.setState({
          timerIsRunning: true
        });
        this.runTimer()
    }
  }

  decBreak(){
    let currentTime = this.state.breakLength;
    if(currentTime <= 1){
      return
    } else {
      this.setState( prevState => { return { breakLength: prevState.breakLength - 1  } })
    }
  }
  decSession() {
    let currentTime = this.state.sessionLength;
      if(currentTime <= 1){
        return
    } else {
      this.setState(prevState => {
        return {
         sessionLength: prevState.sessionLength - 1,
         timeLeft: ((prevState.sessionLength - 1) * 60)
        }
      })
    }
  }
  incBreak(){
    this.setState( prevState => { return { breakLength: prevState.breakLength + 1  } })
  }
  incSession(){
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timeLeft: ((prevState.sessionLength + 1) * 60)
      }
    })
  }

  clockIt() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }


  render() {
    const { breakLength, sessionLength, timeLeft } = this.state;
    return (
      <div>
        <Grid centered divided>
          <Grid.Row columns={2}>
            <Grid.Column centered='true'>
              <h2 id="break-label">Break Length</h2>
              <Grid.Row centered>
                <Button onClick={this.decBreak.bind(this)} id="break-decrement">-</Button>
                <span id="break-length">{ breakLength }</span>
                <Button onClick={this.incBreak.bind(this)} id="break-increment">+</Button>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <h2 id="session-label">Session Length</h2>
              <Button onClick={this.decSession.bind(this)} id="session-decrement">-</Button>
              <span id="session-length">{sessionLength }</span>
              <Button onClick={this.incSession.bind(this)} id="session-increment">+</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <h2 id="timer-label">Timer:</h2>
            <h3 id="time-left">{this.clockIt()}</h3>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.handleStartStop.bind(this)} id="start_stop">Start</Button>
              <Button onClick={this.resetAll.bind(this)} id="Reset">Reset</Button>
              <audio src="" id="beep"></audio>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}