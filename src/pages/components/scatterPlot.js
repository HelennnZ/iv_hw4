
function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width } = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    let margin = {left: offsetX, top: offsetY };
    width = width - margin.left;
    height = height - margin.top;
    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);

    let g = svg.append("g")
                        .attr("id", "background")
                        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    g.append('g')
                .attr("transform", "translate(0," + (height) + ")")
                .attr('class', 'x-axis')
                .call(xAxis);
                g.append('g')
                .attr('class', 'y-axis')
                .call(yAxis);

    g.selectAll('.point')
    .data(data)
    .enter().append('circle')
    .attr('class', "point")
    .attr("cx", d => xScale(d.eruptions))
    .attr('cy', d =>yScale(d.waiting))
    .attr('r', '5')
    .style('fill', 'steelblue')
    .style('stroke', 'black')

    g.append('g')
                .attr("class", 'axis-lable')
                .attr('transform', 'translate(0,' + (-20) + ')')
                .append("text")
                .style("text-anchor", 'middle')
                .text("Waiting")

                g.append('g')
                .attr("class", 'axis-lable')
                .attr('transform', 'translate(' + (width-30) + ',' +(height-10) + ')')
                .append("text")
                .style("text-anchor", 'middle')
                .text("Eruption")


    //task2: import the components needed and uncomment the components in the return 
    return <g>
           <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
           <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
           <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/>
        </g>
}

export default ScatterPlot