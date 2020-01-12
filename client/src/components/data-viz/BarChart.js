import React, { Fragment, Component } from 'react'



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
      <Fragment>
          <div id="title">Bar Chart graph</div>
          <svg>
            <g id="x-axis">
              <circle className="tick" cy="4" cx="4" r="4"></circle>
            </g>
            <g id="y-axis">
              <circle className="tick" cy="4" cx="4" r="4"></circle>
            </g>
          </svg>
      </Fragment>
    )
  }
}
