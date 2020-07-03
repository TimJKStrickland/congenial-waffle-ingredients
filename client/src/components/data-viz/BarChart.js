import React, { Fragment, Component } from 'react'
import * as d3 from 'd3';
import { Container } from 'semantic-ui-react';


export default class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: [
        { 'date': '2013-01', value: 53 },
        { 'date': '2013-02', value: 165 },
        { 'date': '2013-03', value: 269 },
        { 'date': '2013-04', value: 344 },
        { 'date': '2013-05', value: 376 },
        { 'date': '2013-06', value: 410 },
        { 'date': '2013-07', value: 421 },
        { 'date': '2013-08', value: 405 },
        { 'date': '2013-09', value: 376 },
        { 'date': '2013-10', value: 359 },
        { 'date': '2013-11', value: 392 },
        { 'date': '2013-12', value: 433 },
        { 'date': '2014-01', value: 455 },
        { 'date': '2014-02', value: 478 },
      ],
      data: [53,
             165,
             269,
             344,
             376,
             410]
    }
  }
  componentDidMount(){
    const data = this.state.data;
    this.drawBarChart(data);
  }
  drawBarChart(data) {
    const canvasHeight = 300;
    const canvasWidth = 300;
    const canvasContainer = d3.select('#main');
    const margin = { top: 0, bottom: 20, left: 30, right: 20 };
    const x = d3.scalePoint()
    .domain([...data])
    .range([15, 45 * data.length]);
    
    const y = d3.scaleLinear()
    .domain([0, Math.max(...data)])
    .range([0, 300]);
    
    canvasContainer.append('h1')
    .html('Bar Chart of glory')
    .attr('id', 'title');
    
    canvasContainer.append('svg')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight)
    .attr("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`)
    .attr('id', 'canvas')
    .style('border', '1px solid black');
    
    const svgCanvas = d3.select('#canvas');
    const chart = svgCanvas.append("g").attr("transform", `translate(${margin.left},0)`);

    svgCanvas.append('g')
      .attr('id', 'x-axis')
      .attr('transform', 'translate(0, 10)')
      .call(d3.axisBottom(x));
      
      svgCanvas.append('g')
      .attr('transform', 'translate(10, 0)')
      .attr('id', 'y-axis')
      .call(d3.axisLeft(y))

    chart.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('height', datapoint => (datapoint / Math.max(...data)) * 100)
      .attr('width', 10)
      .attr('class', 'bar')
      .attr('fill', 'orange')
      .attr('x', (datapoint, iteration) => iteration / data.length * (canvasWidth - 50))
      .attr('y', datapoint => (canvasHeight - (datapoint / Math.max(...data)) * 100));

  }

  render() {
    return (
      <Container id="main">
      </Container>
    )
  }
}
