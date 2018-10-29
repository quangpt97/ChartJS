import { Component, OnInit } from '@angular/core';
// import * as Chart from 'chart.js';
@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  chart3: any;
  backgroundColor1 = ['rgba(0, 0, 0,0.3)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  borderColor1 = ['rgba(0, 0, 0,0.3)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  constructor() { }

  ngOnInit() {
    this.chart3 = new Chart('canvas3', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'TOP',
            data: [
              {
                x: new Date('9/12/2018'), y: 45

              },
              {
                x: new Date('10/12/2018'), y: 12

              },
              {
                x: new Date('11/12/2018'), y: 20
              },
              {
                x: new Date('12/12/2018'), y: 30

              },
              {
                x: new Date('01/12/2019'), y: 40

              }
            ],
            backgroundColor: this.backgroundColor1[0],
            borderColor: this.borderColor1[0],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor1[0],
            pointBackgroundColor: this.borderColor1[0],
          },
          {
            label: '自社',
            data: [
              {
                x: new Date('09/01/2018'), y: 30
              },
              {
                x: new Date('09/12/2018'), y: 38
              },
              {
                x: new Date('10/12/2018'), y: 17
              },
              {
                x: new Date('11/12/2018'), y: 14

              },
              {
                x: new Date('12/12/2018'), y: 25

              },
              {
                x: new Date('01/12/2019'), y: 27

              }
            ],
            backgroundColor: this.backgroundColor1[1],
            borderColor: this.borderColor1[1],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor1[1],
            pointBackgroundColor: this.borderColor1[1],
          },
          {
            label: '平均',
            data: [
              {
                x: new Date('09/01/2018'), y: 14
              },
              {
                x: new Date('09/12/2018'), y: 27
              },
              {
                x: new Date('10/12/2018'), y: 30
              },
              {
                x: new Date('11/12/2018'), y: 20

              },
              {
                x: new Date('12/12/2018'), y: 13

              },
              {
                x: new Date('01/12/2019'), y: 37

              }
            ],
            backgroundColor: this.backgroundColor1[2],
            borderColor: this.borderColor1[2],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor1[2],
            pointBackgroundColor: this.borderColor1[2],
          },
        ]
      },
      options: {
        onHover: function () {
        },
        responsive: true,
        legend: {
          display: false,
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
                return '    ' + value + '回';
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
            const borderColor1 = ['rgba(0,0,0,0.5)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
            if (tooltip.dataPoints) {
              if (tooltip.dataPoints[0].datasetIndex === 0) {
                tooltip.backgroundColor = '#fff';
                tooltip.titleFontColor = borderColor1[0];
                tooltip.labelTextColors[0] = borderColor1[0];
                tooltip.borderColor = borderColor1[0];

              } else if (tooltip.dataPoints[0].datasetIndex === 1) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = borderColor1[1];
                tooltip.titleFontColor = borderColor1[1];
                tooltip.labelTextColors[0] = borderColor1[1];
              } else if (tooltip.dataPoints[0].datasetIndex === 2) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = borderColor1[2];
                tooltip.titleFontColor = borderColor1[2];
                tooltip.labelTextColors[0] = borderColor1[2];
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
              return data.datasets[tooltipItem.datasetIndex].label + '   ' + dslabelamtY + '回';
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
