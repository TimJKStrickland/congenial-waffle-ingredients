import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      formula: "",
      endValue: 0
    }
  }
  handleClick(button){
    const btn = button.currentTarget.innerHTML;
    const display = document.getElementById('display');
    var numReg = /\d+/;
    if(numReg.test(btn)){
      if (display.innerHTML !== "0"){
        display.innerHTML += btn
        this.setState({
          formula: display.innerHTML
        })
      } else {
        display.innerHTML = btn
      }
      console.log("TCL: Calculator -> handleClick -> display", display)
    }
  }

  clearClick(){
    const display = document.getElementById('display');
    display.innerHTML = "0";
  }

  add(btn) {
    const display = document.getElementById('display');
    const displayValue = Number(display.innerHTML);
    const btnValue = btn.currentTarget.innerHTML;
    console.log("TCL: Calculator -> add -> display", display)
    console.log("TCL: Calculator -> add -> displayValue", displayValue)
    display.innerHTML += btnValue
    this.setState({
      formula: display
    })
  }
  sub(btn) {
    const display = document.getElementById('display');
    const displayValue = Number(display.innerHTML);
    console.log("TCL: Calculator -> add -> display", display)
    console.log("TCL: Calculator -> add -> displayValue", displayValue)
  }
  div(btn) {
    const display = document.getElementById('display');
    const displayValue = Number(display.innerHTML);
    console.log("TCL: Calculator -> add -> display", display)
    console.log("TCL: Calculator -> add -> displayValue", displayValue)
  }
  mult(btn) {
    const display = document.getElementById('display');
    const displayValue = Number(display.innerHTML);
    console.log("TCL: Calculator -> add -> display", display)
    console.log("TCL: Calculator -> add -> displayValue", displayValue)
  }

  render() {
    const { endValue, formula } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick.bind(this)} id="zero">0</Button>
        <Button onClick={this.handleClick.bind(this)} id="one">1</Button>
        <Button onClick={this.handleClick.bind(this)} id="two">2</Button>
        <Button onClick={this.handleClick.bind(this)} id="three">3</Button>
        <Button onClick={this.handleClick.bind(this)} id="four">4</Button>
        <Button onClick={this.handleClick.bind(this)} id="five">5</Button>
        <Button onClick={this.handleClick.bind(this)} id="six">6</Button>
        <Button onClick={this.handleClick.bind(this)} id="seven">7</Button>
        <Button onClick={this.handleClick.bind(this)} id="eight">8</Button>
        <Button onClick={this.handleClick.bind(this)} id="nine">9</Button>
        <Button onClick={this.add.bind(this)} id="add">+</Button>
        <Button onClick={this.handleClick.bind(this)} id="subtract">-</Button>
        <Button onClick={this.handleClick.bind(this)} id="multiply">*</Button>
        <Button onClick={this.handleClick.bind(this)} id="divide">/</Button>
        <Button onClick={this.handleClick.bind(this)} id="decimal">.</Button>
        <Button onClick={this.handleClick.bind(this)} id="equals">=</Button>
        <Button onClick={this.clearClick.bind(this)} id="clear">C</Button>
        <div onClick={this.handleClick.bind(this)} id="display">{endValue}</div>
      </div>
    )
  }
}
