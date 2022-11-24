import React from "react";
import CanvasJSReact from "../canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DividendSimpleChart = () => {
  const options = {
    title: {
      text: "Monthly Dividend Chart",
    },
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
    <div style={{ height: "200px", width: "500px" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default DividendSimpleChart;

