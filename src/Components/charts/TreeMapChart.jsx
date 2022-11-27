import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import './treeMapChart.css'


export default function PopCharts() {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries([
      {
        data: [
          {
            x: "INTC",
            y: 1.2,
          },
          {
            x: "GS",
            y: 0.4,
          },
          {
            x: "CVX",
            y: -1.4,
          },
          {
            x: "GE",
            y: 2.7,
          },
          {
            x: "CAT",
            y: -0.3,
          },
          {
            x: "RTX",
            y: 5.1,
          },
          {
            x: "CSCO",
            y: -2.3,
          },
          {
            x: "JNJ",
            y: 2.1,
          },
          {
            x: "PG",
            y: 0.3,
          },
          {
            x: "TRV",
            y: 0.12,
          },
          {
            x: "MMM",
            y: -2.31,
          },
          {
            x: "NKE",
            y: 3.98,
          },
          {
            x: "IYT",
            y: 1.67,
          },
        ],
      },
    ]);
    setOptions({
      legend: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "treemap",
      },
      title: {
        text: "Treemap",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          
        },
        formatter: function (text, op) {
          return [text, op.value];
        },
        offsetY: -4,
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.3,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: "#CD363A",
              },
              {
                from: 0.001,
                to: 6,
                color: "#52B12C",
              },
            ],
          },
        },
      },
    });
  }, []);
  return (
    <div className="treeMapChartMainContainer">
      <div className="treeMapChartMainrow">
        <div className="treeMapChartMainmixed-chart">
          <ReactApexChart
            options={options}
            series={series}
            type="treemap"
           
            
          />
        </div>
      </div>
    </div>
  );
}
