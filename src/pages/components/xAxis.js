import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function XAxis(props) {
    const {xScale, height, width, axisLabel } = props;
    const xAxisRef = useRef();
    const [isLinear, setIsLinear] = useState(true);

    useEffect(() => {
        // Check if xScale is linear or band
        setIsLinear(typeof xScale.domain()[0] === 'number');

        // Create an axis function based on the scale
        const axis = d3.axisBottom(xScale);

        // Call the axis function and apply it to the ref
        const xAxis = d3.select(xAxisRef.current).call(axis);

        // If the scale is band (not linear), rotate the labels
        if (!isLinear) {
            xAxis.selectAll(".tick text")
                .style("text-anchor", "start")
                .attr("dx", "1em")
                .attr("dy", "0.15em")
                .attr("transform", "rotate(80)");
        }

    }, [xScale, isLinear]);

    return (
        <g 
            transform={`translate(0, ${height})`} 
            ref={xAxisRef} 
            className="x-axis">
            {/* Optionally, add an axis label */}
            {axisLabel && (
                <text 
                    x={width / 2} 
                    y={isLinear? 30 : 50} // Adjust this value based on your margin
                    textAnchor="middle">
                    {axisLabel}
                </text>
            )}
        </g>
    );
}

export default XAxis;
