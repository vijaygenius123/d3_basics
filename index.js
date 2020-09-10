
const data = [
    {id: 1, value: 10, region: 'USA'},
    {id: 2, value: 12, region: 'India'},
    {id: 3, value: 6, region: 'China'},
    {id: 4, value: 9, region: 'Germany'},
]

const xScale = d3
    .scaleBand()
    .domain(data.map(d => d.region))
    .rangeRound([0,250])
    .padding(0.1);

const yScale = d3
    .scaleLinear()
    .domain([0,15])
    .range([300,0])


const container = d3.select('svg')
    .classed('container', true)
    .style('border', '1px solid red');

container
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', data => 300 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value))


