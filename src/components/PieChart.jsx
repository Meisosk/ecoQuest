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
          text: "Breakdown by Equipment",
          align: "center",
          style: {
            color: "#FAF9F6",
            fontSize: "20px",
            fontFamily: "'Lato', sans-serif",
          },
        },
        colors: ["#EDA408", "#874210", "#4F741F", "#95D329", "#d3891a"],
        style: {
          colors: "#FAF9F6",
        },
        legend: {
          position: "bottom",
          labels: {
            colors: "#FAF9F6",
          },
        },
      }}
    ></Chart>
  );
};

export default PieChart;
