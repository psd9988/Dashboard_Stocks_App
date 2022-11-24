import React from "react";
import CanvasJSReact from "../canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export  const FundsDoughnutChart = () =>{

  const options = {
      animationEnabled: true,
      title: {
        text: "Portfolio Distribution",
      },
      subtitles: [
        {
          text: "71% Profit",
          fontColor: "ForestGreen",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "Stocks", y: 5 },
            { name: "Bonds", y: 31 },
            { name: "EFTs", y: 40 },
            { name: "Crypto", y: 17 },
            { name: "Ununsed Funds", y: 7 },
          ],
        },
      ],
    }
    return (
      <div style={{ height: "200px", width: "600px" }}>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    );
  }




