import React from "react";
import Chart from "react-apexcharts";
import { useForm } from "./FormProvider";

const PieChart = () => {
  const { formData } = useForm();

  return (
    <Chart
      type="donut"
      series={formData ? formData : []}
      width="100%"
      height="90%"
      options={{
        labels: ["Clothes", "Car", "Electricity", "Heating", "Diet"],
        title: {
          text: "Breakdown by equiptment",
          align: "center",
          style: {
            color: "#ffffff",
            fontSize: "20px",
            fontFamily: "'Lato', sans-serif",
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
