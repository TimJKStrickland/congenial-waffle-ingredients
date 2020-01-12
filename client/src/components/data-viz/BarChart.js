import React, { Component } from 'react'



export default class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
       title : 'title'
    }
  }
  
  render() {
    const { title } = this.state;
    return (
      <div>
        <div id="title">{title}</div>
      </div>
    )
  }
}
