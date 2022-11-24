/* StockChart.js */
import React, { useState, useEffect } from "react";
import CanvasJSReact from "../canvasjs.stock.react";

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const StockChart = ({ symbol }) => {
  const [dataPoints, setDataPoints] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=demo`
    )
      .then((res) => res.json())
      .then((data) => {
        var date = data["Time Series (Daily)"];
        let dps = [];
        // console.log(date)
        for (var d in date) {
          var r = d.split("-");
          var value = date[d];
          var dateInNumber = new Date(
            parseInt(r[0]),
            parseInt(r[1]) - 1,
            parseInt(r[2])
          ).getTime();
          dps.unshift({
            date: parseInt(dateInNumber),
            open: parseFloat(value["1. open"]),
            high: parseFloat(value["2. high"]),
            low: parseFloat(value["3. low"]),
            close: parseFloat(value["4. close"]),
          });
        }
        console.log(dps);
        return dps;
      })

      .then((data) => {
        var dps = [];

        for (var i = 0; i < data.length; i++) {
          dps.push({
            x: new Date(data[i].date),
            y: Number(data[i].close),
          });
        }
        console.log(data, dps);
        setIsLoaded(true);
        setDataPoints(dps);
      });
  }, [symbol]);

  const options = {
    title: {
      text: `StockChart ${symbol}`,
    },
    theme: "light2",
    subtitles: [
      {
        text: `${symbol}/USD($)`,
      },
    ],
    charts: [
      {
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "MMM DD YYYY",
          },
        },
        axisY: {
          title: `${symbol} Price`,
          prefix: "$",
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "$#,###.##",
          },
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            name: "Price (in USD)",
            type: "splineArea",
            color: "#90EE90",
            yValueFormatString: "$#,###.##",
            xValueFormatString: "MMM DD YYYY",
            dataPoints: dataPoints,
          },
        ],
      },
    ],
    navigator: {
      slider: {
        minimum: new Date("2022-11-01"),
        maximum: new Date("2022-11-18"),
      },
    },
  };
  const containerProps = {
    width: "100%",
    height: "450px",
    margin: "auto",
  };

  return (
    <div>
      <div>
        {
          isLoaded && (
            <CanvasJSStockChart
              containerProps={containerProps}
              options={options}
            />
          )
        }
      </div>
    </div>
  );
};


export default StockChart;
