import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
  chart2: any;
  backgroundColor2 = ['rgba(0, 0, 0,0.5)', 'rgba(196, 123, 45,1)', 'rgba(255, 206, 86, 1)', 'rgba(31, 239, 236,1)'];
  borderColor2 = ['rgba(0, 0, 0,0.5)', 'rgba(196, 123, 45,1)', 'rgba(255, 206, 86, 1)', 'rgba(31, 239, 236,1)'];
  constructor() { }

  ngOnInit() {
    this.chart2 = new Chart('canvas2', {
      type: 'line',
      data: {
        datasets: [
          {
            label: `TOP 送信`,
            data: [
              {
                x: new Date('9/12/2018'), y: 450

              },
              {
                x: new Date('10/12/2018'), y: 120

              },
              {
                x: new Date('11/12/2018'), y: 200
              },
              {
                x: new Date('12/12/2018'), y: 300

              },
              {
                x: new Date('01/12/2019'), y: 400

              }
            ],
            backgroundColor: this.backgroundColor2[0],
            borderColor: this.borderColor2[0],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor2[0],
            pointBackgroundColor: this.borderColor2[0],
          },
          {
            label: 'TOP 受信',
            data: [
              {
                x: new Date('09/01/2018'), y: 300
              },
              {
                x: new Date('09/12/2018'), y: 380
              },
              {
                x: new Date('10/12/2018'), y: 170
              },
              {
                x: new Date('11/12/2018'), y: 140

              },
              {
                x: new Date('12/12/2018'), y: 222

              },
              {
                x: new Date('01/12/2019'), y: 259

              }
            ],
            backgroundColor: this.backgroundColor2[1],
            borderColor: this.borderColor2[1],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor2[1],
            pointBackgroundColor: this.borderColor2[1],
          },
          {
            label: '送信',
            data: [
              {
                x: new Date('09/01/2018'), y: 470
              },
              {
                x: new Date('09/12/2018'), y: 580
              },
              {
                x: new Date('10/12/2018'), y: 680
              },
              {
                x: new Date('11/12/2018'), y: 140

              },
              {
                x: new Date('12/12/2018'), y: 254

              },
              {
                x: new Date('01/12/2019'), y: 270

              }
            ],
            backgroundColor: this.backgroundColor2[2],
            borderColor: this.borderColor2[2],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor2[2],
            pointBackgroundColor: this.borderColor2[2],
          },
          {
            label: '受信',
            data: [
              {
                x: new Date('09/01/2018'), y: 140
              },
              {
                x: new Date('09/12/2018'), y: 270
              },
              {
                x: new Date('10/12/2018'), y: 300
              },
              {
                x: new Date('11/12/2018'), y: 200

              },
              {
                x: new Date('12/12/2018'), y: 130

              },
              {
                x: new Date('01/12/2019'), y: 370

              }
            ],
            backgroundColor: this.backgroundColor2[3],
            borderColor: this.borderColor2[3],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor2[3],
            pointBackgroundColor: this.borderColor2[3],
          }
        ]
      },
      options: {
        onHover: function () {
        },
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 0
          }
        },
        plugins: {
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
            }
          },
        },
        scales: {
          // scaleLabel: '<%= \' \' + value%> %',
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 10,
              callback: function (value) {
                return '    ' + value + '件';
              },
            },
            position: 'right',
            gridLines: {
              display: true,
              drawBorder: false,
              // display:true,
              zeroLineWidth: 1,
              zeroLineColor: '#f5f4f0',
              color: '#f5f4f0',
              tickMarkLength: 25,
              drawTicks: false
            },
          }],
          xAxes: [{
            type: 'time',
            ticks: {
              padding: -7,
            },
            time: {
              unit: 'month',
              displayFormats: {
                'month': 'M月',
                quarter: 'YYYY'
              },
              tooltipFormat: 'YYYY年MM月DD日',
              round: 'day',
              stepSize: 1,
            },
            scaleLabel: {
              display: true,
              fontSize: 30,
            },
            gridLines: {
              offsetGridLines: true,
              display: false
            },
          }]
        },
        tooltips: {
          custom: function (tooltip) {
            const borderColor2 = ['rgba(0, 0, 0,0.5)', 'rgba(196, 123, 45,1)', 'rgba(255, 206, 86, 1)', 'rgba(31, 239, 236,1)'];
            if (tooltip.dataPoints) {
              if (tooltip.dataPoints[0].datasetIndex === 0) {
                tooltip.backgroundColor = '#fff';
                tooltip.titleFontColor = borderColor2[0];
                tooltip.labelTextColors[0] = borderColor2[0];
                tooltip.borderColor = borderColor2[0];

              } else if (tooltip.dataPoints[0].datasetIndex === 1) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = borderColor2[1];
                tooltip.titleFontColor = borderColor2[1];
                tooltip.labelTextColors[0] = borderColor2[1];
              } else if (tooltip.dataPoints[0].datasetIndex === 2) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = borderColor2[2];
                tooltip.titleFontColor = borderColor2[2];
                tooltip.labelTextColors[0] = borderColor2[2];
              } else if (tooltip.dataPoints[0].datasetIndex === 3) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = borderColor2[3];
                tooltip.titleFontColor = borderColor2[3];
                tooltip.labelTextColors[0] = borderColor2[3];
              }
              // console.log(tooltip);
            }
          },
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              // console.log(dataset);
              return {
                borderColor: 'green',
                backgroundColor: 'black'
              };
            },
            label: function (tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const dslabelamtY = dataset.data[tooltipItem.index]['y'];
              if (dataset.label === 'TOP') {
              }
              // console.log(tooltipItem);
              // console.log(data);
              return data.datasets[tooltipItem.datasetIndex].label + '   ' + dslabelamtY + '件';
            },

          },
          position: 'nearest',
          mode: 'nearest',
          yPadding: 10,
          xPadding: 10,
          caretSize: 4,
          intersect: false,
          // backgroundColor: 'rgba(255,99,132,1)',
          // borderColor: 'red',
          displayColors: false,
          borderWidth: 2
          // bodyFontColor: 'rgba(255,99,132,1)',
          // titleFontColor: 'rgba(255,99,132,1)',
        }
      }
    });
  }

}
