import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const PieChart = (props) => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(props.chartData);
    setChartOptions(props.chartOptions);
  }, [props.chartData, props.chartOptions]);

  return (
    <Chart
      type="donut"
      series={[44, 55, 41, 17, 15]}
      width="100%"
      height="100%"
      options={{
        labels: [
          "Air conditioning",
          "Pump",
          "Lights",
          "Filtration system",
          "Car",
        ],
        title: {
          text: "Breakdown by equiptment",
          align: "center",
          style: {
            color: "#ffffff",
            fontSize: "20px",
            fontFamily: "'Lato', sans-serif"
          },
        },
        colors: ["#EDA408", "#874210", "#4F741F", "#95D329", "#d3891a"],
        style: {
          colors: "#ffffff",
        },
        legend: {
          position: "bottom",
          labels: {
            colors: "#fffff",
          },
        },
      }}
    ></Chart>
  );
};

export default PieChart;
