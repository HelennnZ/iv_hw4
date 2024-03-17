import React from 'react'
import XAxis from '../components/xAxis' // Adjust the import path as necessary
import YAxis from '../components/yAxis'// Adjust the import path as necessary
import Points from '../components/points' // Adjust the import path as necessary

function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipData, setTooltipX, setTooltipY } = props;

    const plotHeight = height - offsetY;
    const plotWidth = width - offsetX;
    
    //task2: import the components needed and uncomment the components in the return 
    return (<g transform={`translate(${offsetX}, ${offsetY})`}>
    <Points data={data} xScale={xScale} yScale={yScale} radius={5} color='steelblue' selectedStation = {selectedStation} setSelectedStation = {setSelectedStation} setTooltipData={setTooltipData} setTooltipX={setTooltipX} setTooltipY={setTooltipY}/>
    <YAxis yScale={yScale} axisLabel="Trip duration end in" />
    <XAxis xScale={xScale} height = {plotHeight + 20} width={plotWidth} axisLabel="Trip duration start from" />
</g>
);
}

export default ScatterPlot

// height={height} width={width}