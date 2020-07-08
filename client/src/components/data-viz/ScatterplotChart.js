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

    const getDateY = (datum) => new Date(datum["Year"], 0, 0, 0, 0, 0, 0);
    const getDateMS = (datum) => {
      let [mm, ss] = datum['Time'].split(':').map(x=>Number(x));
      let date = new Date();
      date.setMinutes(mm)
      date.setSeconds(ss)
      return date;
    };
    const minX = d3.min(data, d=> getDateY(d));
    const maxX = d3.max(data, d=> getDateY(d));
    const maxY = d3.max(data, d=> getDateMS(d));
    const minY = d3.min(data, d=> getDateMS(d));
    minX.setFullYear(minX.getFullYear());
    maxX.setFullYear(maxX.getFullYear());
    maxY.setSeconds(maxY.getSeconds());
    minY.setSeconds(minY.getSeconds());

    const x = d3.scaleTime()
    .domain([minX, maxX])
    .range([0, (canvasWidth - margin.left - margin.right)]);

    const y = d3.scaleTime()
    .domain([minY, maxY])
    .range([canvasHeight - margin.bottom - margin.top, margin.bottom]);

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
      .call(d3.axisBottom(x)
      .tickFormat(d3.scaleTime().tickFormat(10, "%Y")))
      .attr('id', 'x-axis')
      .attr('transform', `translate(${margin.left}, ${canvasHeight - margin.top - margin.bottom})`)

      svgCanvas.append('g')
      .call(d3.axisLeft(y)
      .tickFormat(d3.scaleTime().tickFormat(10, "%M:%S")))
      .attr('transform', `translate(${margin.left}, 0)`)
      .attr('id', 'y-axis');

    chart
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("cx", (datapoint) => x(getDateY(datapoint)))
      .attr("cy", (datapoint) => y(getDateMS(datapoint)))
      .attr("data-xvalue", (dp) => dp['Year'])
      .attr("data-yvalue", (dp) => getDateMS(dp))
      .attr("class", "dot")
      .attr("fill", "orange")
      .text(function (d) {
        return d['Year'];
      })
      .on("mouseover", function (d) {
        tooltip.text(`${d["Time"]},${d["Year"]}`);
        tooltip.attr('data-year', d['Year'])
        return tooltip.style("visibility", "visible");
      })
      .on("mouseenter", function (d) {
        let year = getDateY(d);
        let time = getDateMS(d);
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
        .attr("id", "legend")
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
