import React from "react";
import CanvasJSReact from "../../canvasjs.stock.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const DividendSimpleChart = () => {
  const options = {
    title: {
      text: "Monthly Dividend Chart",
    },height: '300',
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "June", y: 10 },
          { label: "July", y: 15 },
          { label: "August", y: 25 },
          { label: "September", y: 30 },
          { label: "October", y: 28 },
        ],
      },
    ],
  };
  return (
    <div style={{margin:'1rem'}}>
      <CanvasJSChart options={options} />
    </div>
  );
};



