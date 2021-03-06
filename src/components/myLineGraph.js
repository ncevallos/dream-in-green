import React, { Component, } from 'react';
import {Line} from "react-chartjs-2";

const myLineGraph = (props) => {
    const dataSet = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ],
        datasets: [
          {
            label: 'Survey History',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(61,158,103,0.4)',
            borderColor: 'rgb(61,158,103, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(61,158,103,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(61,158,103,1)',
            pointHoverBorderColor: 'rgba(61,158,103,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data
          }
        ],
      };

      const options = {
        scales: {
          y: [{
            ticks: {
              min: 0,
              max: 150,
              stepSize: 20
            }
          }]
        }
      }
        return (
            <div id="myChart">
                <Line data={dataSet} option={options} />
            </div>
        )
}

 export default myLineGraph;