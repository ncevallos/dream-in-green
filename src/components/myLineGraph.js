import React, { Component, } from 'react';
import {Line} from "react-chartjs-2";

// export default class LineGraph extends Component {
//     constructor(props){
//         super(props);
//         this.chartRef = React.createRef();
//     }
//     componentDidMount() {
//         console.log(this.chartRef);
//         //const ctx = document.getElementById('myChart')
//         // const chart = new Chart(ctx, {
//         //       type: 'line',
//         //       data: this.props.data,
//         //       options: {
//         //         scales: {
//         //           x: {
//         //             beginAtZero: true
//         //           }
//         //         }
//         //       }
//           //   });
//     }



const myLineGraph = (props) => {
    const dataSet = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        datasets: [
          {
            label: 'Survey History',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data
          }
        ],
       
      };
        return (
            <div id="myChart">
                <Line data={dataSet} />
            </div>
        )
}













// const myLineGraph = (props) => {
    
//         let ctx = document.getElementById('myChart');
//         let myChart = new Chart(ctx, {
//               type: 'line',
//               data: props.data,
//             });
    
    
//         return (
//             <div>
//                 <canvas
//                     id="myChart"
//                     height="400"
//                     width="400"
//                     backgroundcolor="blue"
//                 />
//             </div>
//         );
    
// }

 export default myLineGraph;