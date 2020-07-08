import React, { Fragment, Component } from 'react'
import * as d3 from 'd3';
import { Container } from 'semantic-ui-react';


export default class ScatterPlot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      gdp: []
    }
  }
  componentDidMount(){
    fetch(
      `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
          const data = this.state.data;
          this.drawScatterPlot(data);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

  }
  drawScatterPlot(data) {
    const canvasHeight = 650;
    const canvasWidth = 650;
    const canvasContainer = d3.select('#main');
    const margin = { top: 10, bottom:30, left: 50, right: 50 };

    const parseYears = d3.timeParse("%Y");
    const parseMinutes = d3.timeParse("%M:%S");
    const minutes = data.map(datum => parseMinutes(datum['Time']));
    const years = data.map(datum => parseYears(datum['Year']));
    const x = d3.scaleTime()
    .domain(d3.extent(years))
    .range([0, (canvasWidth - margin.left - margin.right)]);

    const y = d3.scaleTime()
    .domain(d3.extent(minutes))
    .range([(canvasHeight - margin.bottom - margin.top), margin.bottom]);

    canvasContainer.append('h1')
    .html('Scatterplot Chart of glory')
    .attr('id', 'title');

    canvasContainer.append('svg')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight)
    .attr("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`)
    .attr('id', 'canvas')
    .style('border', '1px solid black')
    .style('margin', '0 auto');

    const svgCanvas = d3.select('#canvas');
    const chart = svgCanvas.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .attr('id', 'chart');

    svgCanvas.append('g')
      .call(d3.axisBottom(x))
      .attr('id', 'x-axis')
      .attr('transform', `translate(${margin.left}, ${canvasHeight - margin.top - margin.bottom})`)

      svgCanvas.append('g')
      .call(d3.axisLeft(y))
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('id', 'y-axis');

    chart
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("cx", (datapoint) => x(parseYears(datapoint['Year'])))
      .attr("cy", (datapoint) => canvasHeight - y(parseMinutes(datapoint['Time'])))
      .attr("data-xvalue", (dp) => dp['Year'])
      .attr("data-yvalue", (dp) => dp['Time'])
      .attr("class", "dot")
      .attr("fill", "orange")
      .text(function (d) {
        // return d;
      })
      .on("mouseover", function (d) {
        // tooltip.html(`${d['Year']}, ${d['Time']}`);
        // tooltip.attr('data-date', d['Year'])
        // return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function (d) {
        // return tooltip.attr(
          // "transform",
          // `translate(${x(d['Year'])},${y(d['Time'])})`
        // );
      })
      .on("mouseout", function () {
        // return tooltip.style("visibility", "hidden");
      });

      var tooltip = d3
        .select("#canvas")
        .append("text")
        .attr("id", "tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
  }

  render() {
    return (
      <Container id="main">
      </Container>
    )
  }
}
