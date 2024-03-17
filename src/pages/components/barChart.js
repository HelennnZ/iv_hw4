import React from 'react';
import Bars from '../components/bars'
import XAxis from '../components/xAxis' 
import YAxis from '../components/yAxis' 


function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation} = props;

    return <g transform = {`translate(${offsetX}, ${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height} selectedStation = {selectedStation} setSelectedStation = {setSelectedStation}/>
        <YAxis yScale={yScale} width={width} axisLable={"Bikers start from"}/>
        <XAxis xScale={xScale} height={height} width={width} />
        </g>
}

export default BarChart