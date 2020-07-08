import React, { Component } from 'react'
import * as d3 from 'd3';
import { Container } from 'semantic-ui-react';


export default class HeatMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      gdp: []
    }
  }
  componentDidMount(){
    fetch(
      `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.monthlyVariance,
            base: result.baseTemperature,
          });
          const data = this.state.data;
          this.drawHeatMap(data);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

  }
  drawHeatMap(data) {
    const canvasHeight = 650;
    const canvasWidth = 650;
    const canvasContainer = d3.select('#main');
    const margin = { top: 10, bottom:30, left: 50, right: 50 };
    const formatMonth = (datum) =>(d3.timeFormat("%b"));
    const parseMonth = (datum) =>(d3.timeParse(datum['month'] - 1))
    const getDateY = (datum) => new Date(datum["year"], 0, 0, 0, 0, 0, 0);
    const getDateMonth = (datum) => new Date(2020, (datum["month"] - 1), 1);
    const minX = d3.min(data, d=> getDateY(d));
    const maxX = d3.max(data, d=> getDateY(d));
    const maxY = d3.max(data, d=> getDateMonth(d));
    const minY = d3.min(data, d=> getDateMonth(d));

    const x = d3.scaleTime()
    .domain([minX, maxX])
    .range([0, (canvasWidth - margin.left - margin.right)]);

    const y = d3
      .scaleTime()
      .domain([maxY, minY])
      .range([canvasHeight - margin.bottom - margin.top, margin.bottom]);

    canvasContainer.append('h1')
    .html('Heatmap Chart of entropy')
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
      .call(d3.axisBottom(x)
      .tickFormat(d3.scaleTime().tickFormat(12, "%Y")))
      .attr('id', 'x-axis')
      .attr('transform', `translate(${margin.left}, ${canvasHeight - margin.top - margin.bottom})`)

      svgCanvas.append('g')
      .call(d3.axisLeft(y)
      .tickFormat(d3.scaleTime().tickFormat(12, "%b")))
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('id', 'y-axis');

    chart
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("height", 1)
      .attr("x", (datapoint) => x(datapoint['year']))
      .attr("y", (datapoint) => y((datapoint['month']-1)))
      .attr("data-month", (datapoint) => parseMonth(datapoint['month'] - 1))
      .attr("data-year", (datapoint) => datapoint['year'])
      .attr("data-temp", (datapoint) => datapoint['variance'])
      .attr("class", "cell")
      .attr("fill", "orange")
      .text(function (datapoint) {
        return datapoint['year'];
      })
      .on("mouseover", function (datapoint) {
        tooltip.text(`${parseMonth(datapoint["month"] - 1)},${datapoint["year"]}`);
        tooltip.attr('data-year', datapoint['year'])
        return tooltip.style("visibility", "visible");
      })
      .on("mouseenter", function (d) {
        let year = getDateY(d);
        let time = getDateMonth(d);
        return tooltip.attr(
          "transform",
          `translate(${x(year)},${y(time)})`
        );
      })
      .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
      });

      const legend = d3
        .select("#canvas")
        .append("text")
        .attr("id", "description")
        .text('This is the description')
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "visible");

      const tooltip = d3
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
