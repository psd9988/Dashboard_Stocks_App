import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

// function PopCharts() {
//   const [options, setOptions] = useState({});
//   const [series, setSeries] = useState([]);

//   useEffect(() => {
//     setOptions({
//       chart: {
//         background: "#f4f4f4",
//         foreColor: "#333",
//       },
//       xaxis: {
//         categories: [
//           "New York",
//           "Los Angeles",
//           "Chicago",
//           "Houston",
//           "Philadelphia",
//           "Phoenix",
//           "San Antonio",
//           "San Diego",
//           "Dallas",
//           "San Jose",
//         ],
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//         },
//       },
//       fill: {
//         color: ["#f44336"],
//       },
//       dataLabels: {
//         enable: false,
//       },
//       title: {
//         text: "Largest US Cities By Population",
//         align: "center",
//         margin: 20,
//         offsetY: 20,
//         style: {
//           fontSize: "25px",
//         },
//       },
//     });
//     setSeries([{
//       name: "Population",
//       data: [
//         85593, 45352, 34523, 52453, 56476, 52355, 32423, 24342, 54354, 56755,
//       ],
//     }]);
//   }, []);

//   return (
//     <>
//       <Chart
//         options={options}
//         series={series}
//         type="bar"
//         height="450"
//         width="100%"
//       />
//     </>
//   );
// }

// export default PopCharts;

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
        text: "Treemap with Color scale",
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
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={options}
            series={series}
            type="treemap"
            height="700px"
          />
        </div>
      </div>
    </div>
  );
}
// export default function PopCharts() {
//   const [options, setOptions] = useState({});
//   const [series, setSeries] = useState([]);

//   useEffect(() => {
//     setOptions({
//       ...options,
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//       },
//     });
//     setSeries([
//       ...series,
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91],
//       },
//     ]);
//   },[options, series]);
//   return (
//     <div className="app">
//       <div className="row">
//         <div className="mixed-chart">
//           <Chart options={options} series={series} type="bar" width="500" />
//         </div>
//       </div>
//     </div>
//   );
// }

// class App extends Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     options: {
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//       },
//     },
//     series: [
//       ,
//     ],
//   };
// }

// render() {
//   return (
// <div className="app">
//   <div className="row">
//     <div className="mixed-chart">
//       <Chart
//         options={this.state.options}
//         series={this.state.series}
//         type="bar"
//         width="500"
//       />
//     </div>
//   </div>
// </div>
// );
// }
// }

// export default App;
