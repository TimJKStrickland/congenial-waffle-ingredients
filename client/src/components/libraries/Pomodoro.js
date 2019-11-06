import React, { Component } from 'react'
import accurateInterval from '../../assets/util/accurateTimer.js'
import boop from '../../assets/clock/bing.mp3'
import { Button, Grid } from 'semantic-ui-react'


export default class Pomodoro extends Component {
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      timerIsRunning: false,
      timerType: 'Session',
      interval: ''
    }
  }

  resetAll(){
    this.setState({
      timeLeft: 1500,
      timerIsRunning: false,
      breakLength: 5,
      sessionLength: 25,
      timerType: 'Session'
    })
    this.state.interval && this.state.interval.cancel()
    let beep = document.getElementById('beep');
    beep.pause();
    beep.currentTime = 0;
  }

  handleStartStop(){
    const { timerIsRunning } = this.state;
    if(timerIsRunning){
      this.setState({
        timerIsRunning: false
      });
      this.state.interval && this.state.interval.cancel()
    } else {
      this.startClock()
      this.setState({
        timerIsRunning: true
      });
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
    var breakLength = this.state.breakLength;
    if (breakLength >= 60) {
      return
    }
    this.setState( prevState => { return { breakLength: prevState.breakLength + 1  } })
  }
  incSession(){
    var sessionLength = this.state.sessionLength;
    if(sessionLength >= 60){
      return
    }
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timeLeft: ((prevState.sessionLength + 1) * 60)
      }
    })
  }

  soundOff(){
    let { timeLeft } = this.state;
    let beep = document.getElementById('beep');
    if(timeLeft === 0){
      beep.play();
    }
  }

  clockIt(timeLeft) {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  startClock() {
    this.setState({
      interval: accurateInterval(() => {
        this.decrementTimer();
        this.phaseControl();
      }, 1000)
    })
  }

  switchTimer(timerLength, timerType){
    this.setState({
      timerType: timerType,
      timeLeft: timerLength
    })
  }


  phaseControl() {
    let { timeLeft, timerType, breakLength, sessionLength, interval } = this.state;
    this.soundOff();
    if (timeLeft < 0) {
      if(timerType == 'Session'){
        interval && interval.cancel();
        this.startClock();
        this.switchTimer(breakLength * 60, 'Break');
      } else {
        interval && interval.cancel();
        this.startClock();
        this.switchTimer(sessionLength * 60, 'Session')
      }
    }
  }

  decrementTimer(){
    this.setState( prevState => {
      return {
        timeLeft: prevState.timeLeft - 1
      }
    })
  }


  render() {
    const { breakLength, sessionLength, timeLeft, timerType } = this.state;
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
            <h2 id="timer-label">Timer: { timerType }</h2>
            <h3 id="time-left">{this.clockIt(timeLeft)}</h3>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.handleStartStop.bind(this)} id="start_stop">Start</Button>
              <Button onClick={this.resetAll.bind(this)} id="reset">Reset</Button>
              <audio src={ boop } id="beep" preload="auto"></audio>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}