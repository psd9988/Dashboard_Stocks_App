/* DividendSimpleChart.js */
// import React, { Component } from "react";
import React from "react";
import CanvasJSReact from "../canvasjs.stock.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
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

// export default class DividendSimpleChart extends Component {
// render() {
// const options = {
//   title: {
//     text: "Monthly Dividend Chart",
//   },
//   data: [
//     {
//       // Change type to "doughnut", "line", "splineArea", etc.
//       type: "column",
//       dataPoints: [
//         { label: "June", y: 10 },
//         { label: "July", y: 15 },
//         { label: "August", y: 25 },
//         { label: "September", y: 30 },
//         { label: "October", y: 28 },
//       ],
//     },
//   ],
// };
// return (
//   <div style={{height: "200px", width: "500px"}}>
//     <CanvasJSChart
//       options={options}
//       /* onRef={ref => this.chart = ref} */
//     />
//     {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//   </div>
// );
// }
// }
