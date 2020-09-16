// import  "../../js/loader";
// let loader = require('../../js/loader');
import React from "react";

const PieChart = ({ chartData }: { chartData: Array<any> }) => {
  // const [chartData, setChart] = React.useState(chart);
  React.useEffect(() => {
    const drawChart = () => {
      // @ts-ignore
      const data = google.visualization.arrayToDataTable(chartData);
      // 图表样式参数:https://developers.google.com/chart/interactive/docs/gallery/piechart
      var options = {
        pieHole: 0.5,
        chartArea: {
          width: 200,
        },
        pieSliceTextStyle: {
          fontSize: 10,
          color: "black",
          bold: true,
        },
        pieSliceText: "label",
        legend: "none",
        slices: [
          { color: "#BBE0FC" },
          { color: "#008BFE" },
          { color: "#8AC9FC" },
          { color: "#ABD7FC" },
          { color: "#6DBCFF" },
          { color: "#97D0FD" },
        ],
      };

      // @ts-ignore
      const chart = new google.visualization.PieChart(
        document.getElementById("donut_single")
      );
      chart.draw(data, options);
    };
    // @ts-ignore
    google.charts.load("current", { packages: ["corechart"] });
    // @ts-ignore
    google.charts.setOnLoadCallback(drawChart);
  });
  return <div id="donut_single" className="content-chart"></div>;
};

export default PieChart;
