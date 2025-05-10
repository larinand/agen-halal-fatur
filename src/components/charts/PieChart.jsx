import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "donut",
          id: "apexchart-donut",
        },
        labels: [
          "Initial Visit",
          "Offer Sent",
          "Payment Received",
          "Certified",
        ],
        plotOptions: {
          pie: {
            donut: {
              size: "45%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "18px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  offsetY: 0,
                  formatter: function (val) {
                    return val;
                  },
                },
                value: {
                  show: true,
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: "#373d3f",
                  offsetY: 0,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: false,
                  showAlways: false,
                  label: "Total",
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },
      series: [25, 40, 20, 15],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="donut"
      />
    );
  }
}
