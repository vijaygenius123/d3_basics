
const data = [
    {id: 1, value: 10, region: 'USA'},
    {id: 2, value: 12, region: 'India'},
    {id: 3, value: 6, region: 'China'},
    {id: 4, value: 9, region: 'Germany'},
]

const container = d3.select('div')
    .classed('container', true)
    .style('border', '1px solid red');

container
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 10) + 'px')


