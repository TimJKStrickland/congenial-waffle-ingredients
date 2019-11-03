import React, { Component, Fragment } from 'react'
import { Button, Container} from 'semantic-ui-react'

import hihat from '../../assets/drum/HH_Hard.wav'
import snare from '../../assets/drum/Snare_BrightAndEarly.wav'
import snare_synth from '../../assets/drum/SnareAnalog.wav'
import kick from '../../assets/drum/Kick_BMX.wav'
import tom from '../../assets/drum/Tom_Modest.wav'
import low_synth from '../../assets/drum/Tom_Synth.wav'
import bweep from '../../assets/drum/TomAnalogHigh4.wav'
import beep from '../../assets/drum/TomAnalog.wav'
import boop from '../../assets/drum/TomAnalogHigh.wav'


export default class Drum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      error: null
    }
  };
  
  handleClick() {
    const clickedPad = document.getElementById(this);
    console.log("TCL: Drum -> handleClick -> clickedPad", clickedPad)
    const drumPads = document.querySelectorAll('.clip');
    drumPads.forEach(elem => {
      if (clickedPad.id.toUpperCase() === elem.id.toUpperCase()) {
        elem.play();
        const display = document.getElementById('display');
        display.innerHTML = `${elem.id}: ${elem.parentElement.id}`
      }
    })
  }
  

  componentDidMount(){
    window.addEventListener('keydown', e => {
      const drumPads = document.querySelectorAll('.clip');
      drumPads.forEach(elem => {
        if(e.key.toUpperCase() === elem.id.toUpperCase()){
          elem.play()
          const display = document.getElementById('display');
          display.innerHTML = `${elem.id}: ${elem.parentElement.id}`
        }
      })
    })
  }

  render() {
    const { error, isLoaded } = this.state;
    if(error){
      return (
        <div>
          { error }
        </div>
      )
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Fragment>
          <Container id="drum-machine" style={{ display: 'grid', gridRowGap: '1rem', gridTemplateColumns: '100px 100px 100px', margin: 'auto' }}>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('Q')} id="snare">
              Q
              <audio src={snare} className="clip" id="Q"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('W')} id="hihat">
              W
              <audio src={hihat} className="clip" id="W"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('E')} id="snare_synth">
              E
              <audio src={snare_synth} className="clip" id="E"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('A')} id="kick">
              A
              <audio src={kick} className="clip" id="A"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('S')} id="tom">
              S
              <audio src={tom} className="clip" id="S"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('D')} id="low_synth">
              D
              <audio src={low_synth} className="clip" id="D"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('Z')} id="bweep">
              Z
              <audio src={bweep} className="clip" id="Z"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('X')} id="beep">
              X
              <audio src={beep} className="clip" id="X"></audio>
            </Button>
            <Button className="drum-pad" color="green" onClick={this.handleClick.bind('C')} id="boop">
              C
              <audio src={boop} className="clip" id="C"></audio>
            </Button>
            <Container id="display">
            </Container>
          </Container>
        </Fragment>
      )
    }
  }
}
