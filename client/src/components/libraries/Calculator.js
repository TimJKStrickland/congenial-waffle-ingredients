import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


const operators = {
  'add': (first, second) => first + second,
  'subtract': (first, second) => first - second,
  'divide': (first, second) => first / second,
  'multiply': (first, second) => first * second,
  'equals': (first, second) => second
}
export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      firstOperand: null,
      secondOperand: null,
      waitingForSecondOperand: false,
      nextOperator: null,
      excludeMinus: false
    }
  }

  clearClick() {
    this.setState({
      display: "0",
      firstOperand: null,
      secondOperand: null,
      waitingForSecondOperand: false,
      nextOperator: null,
      excludeMinus: false
    })
  }

  handleDigit(button){
    const { waitingForSecondOperand, display, excludeMinus } = this.state;
    const btn = button.currentTarget.innerHTML;
    const currentValue = document.getElementById('display').innerHTML
    if (btn === "." && currentValue.includes('.')){
      return
    }
    if(excludeMinus){
      this.setState({
        display: "-" + btn,
        excludeMinus: false,
        waitingForSecondOperand: false
      })
      return
    }
    if(waitingForSecondOperand) {
      this.setState({
          waitingForSecondOperand: false,
          display: btn
      });
    } else {
      if (display !== "0"){
        this.setState((prevState) => {
          return {
            display: prevState.display + btn
          }
        })
      } else {
        this.setState({
          display: btn
        })
      }
    }
  }

  handleOperator(clickedOperator) {
    const nextOp = clickedOperator.currentTarget.id;
    const { display, firstOperand, waitingForSecondOperand, nextOperator } = this.state;
    if(nextOperator && waitingForSecondOperand) {
      if(nextOp === "subtract"){
        this.setState((prevState) => {
          return {
            nextOperator: prevState.nextOperator,
            excludeMinus: true
          }
        });
        return
      } else {
        this.setState({
          nextOperator: nextOp,
          excludeMinus: false
        })
      }
    } else if(firstOperand == null) {
      this.setState({
        firstOperand: Number(display)
      })
    } else if(nextOperator) {
      const currentValue = firstOperand || 0;
      const result = operators[nextOperator](currentValue, Number(display));
      this.setState({
        display: result,
        firstOperand: result,
      });
    }
    this.setState({
      waitingForSecondOperand: true,
      nextOperator: nextOp
    });
  }

  render() {
    const { display } = this.state;
    return (
      <div>
        <Button onClick={this.handleDigit.bind(this)} id="zero">0</Button>
        <Button onClick={this.handleDigit.bind(this)} id="one">1</Button>
        <Button onClick={this.handleDigit.bind(this)} id="two">2</Button>
        <Button onClick={this.handleDigit.bind(this)} id="three">3</Button>
        <Button onClick={this.handleDigit.bind(this)} id="four">4</Button>
        <Button onClick={this.handleDigit.bind(this)} id="five">5</Button>
        <Button onClick={this.handleDigit.bind(this)} id="six">6</Button>
        <Button onClick={this.handleDigit.bind(this)} id="seven">7</Button>
        <Button onClick={this.handleDigit.bind(this)} id="eight">8</Button>
        <Button onClick={this.handleDigit.bind(this)} id="nine">9</Button>
        <Button onClick={this.handleOperator.bind(this)} id="add">+</Button>
        <Button onClick={this.handleOperator.bind(this)} id="subtract">-</Button>
        <Button onClick={this.handleOperator.bind(this)} id="multiply">&times;</Button>
        <Button onClick={this.handleOperator.bind(this)} id="divide">&divide;</Button>
        <Button onClick={this.handleDigit.bind(this)} id="decimal">.</Button>
        <Button onClick={this.handleOperator.bind(this)} id="equals">=</Button>
        <Button onClick={this.clearClick.bind(this)} id="clear">AC</Button>
        <div id="display">{ display }</div>
      </div>
    )
  }
}
