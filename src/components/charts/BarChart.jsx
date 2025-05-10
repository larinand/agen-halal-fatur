import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [200, 100, 235, 80, 55, 35],
        },
      ],
      options: {
        chart: {
          type: "bar",
          id: "apexchart-bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 5,
            dataLabels: {
              position: "top",
              hideOverflowingLabels: true,
            },
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 9007199254740991,
                  color: "#000000",
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val;
          },
          offsetX: 0,
          style: {
            fontSize: "12px",
            colors: ["#000"],
          },
          colors: ["#000"], // Warna bar
        },
        xaxis: {
          categories: [
            "Foods",
            "Cosmetics",
            "Pharmaceuticals",
            "Packaging",
            "Personal Care",
            "Beverages",
          ],
        },
      },
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
      />
    );
  }
}
