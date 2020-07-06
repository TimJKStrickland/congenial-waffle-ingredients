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
    fetch(`https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`)
    .then(res=>res.json())
    .then(result=>{
      this.setState({
        isLoaded: true,
        data: result.data
      })
      const data = this.state.data;
      this.drawScatterPlot(data);
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      })
    }
    );

  }
  drawScatterPlot(data) {
    const canvasHeight = 650;
    const canvasWidth = 650;
    const canvasContainer = d3.select('#main');
    const margin = { top: 10, bottom:30, left: 50, right: 50 };

    // const values = data.map(datum => datum[1]);
    const formatDates = d3.timeParse("%Y-%m-%d");
    const dates = data.map(datum => formatDates(datum[0]));
    const x = d3.scaleTime()
    .domain(d3.extent(dates))
    .range([0, (canvasWidth - margin.left - margin.right)]);

    const y = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([(canvasHeight - margin.bottom - margin.top), margin.bottom]);

    canvasContainer.append('h1')
    .html('Bar Chart of glory')
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
      .call(d3.axisLeft().scale(y))
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('id', 'y-axis');

    chart
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "height",
        (datapoint) =>
          canvasHeight - y(datapoint[1]) - margin.top - margin.bottom
      )
      .attr("width", 2)
      .attr("data-gdp", (dp) => dp[1])
      .attr("data-date", (dp) => dp[0])
      .attr("class", "bar")
      .attr("fill", "orange")
      .attr("x", (datapoint) => x(formatDates(datapoint[0])))
      .attr("y", (datapoint) => y(datapoint[1]))
      .text(function (d) {
        return d;
      })
      .on("mouseover", function (d) {
        tooltip.html(`${d[0]}, ${d[1]}`);
        tooltip.attr('data-date', d[0])
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function (d) {
        return tooltip.attr(
          "transform",
          `translate(${x(formatDates(d[0]))},${y(d[1])})`
        );
      })
      .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
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
