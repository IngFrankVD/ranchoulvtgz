import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Litros Ordeñados',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Quesos',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: 'Vendidos',
          data: [5, 12, 53, 17, 21, 17, 1]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

    <div className="m-5 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700" id="chart">
      <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
    </div>


      );
    }
  }
  
  export default LineChart;