import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';

declare var $: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor() {
  }


  ngOnInit() {
    // const options = {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //       position: 'right'
    //     }],
    //     xAxes: [{
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'abc',
    //         fontSize: 30,
    //       }
    //     }]
    //   },
    //   tooltips: {
    //     callbacks: {
    //       label: function (item, data) {
    //         return data.datasets[item.datasetIndex].label[item.index]
    //           + ': ' + data.datasets[item.datasetIndex].data[item.index];
    //       }
    //     }
    //   }
    // };

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        // labels: ['9自', '10自', '11自', '12自', '1自'],
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
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: 'rgba(255, 206, 86, 1)',
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
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          }
        ]
      },
      options: {
        // title: {
        //   text: 'gopro',
        //   display: true,
        //   position: 'top'
        // },
        onHover: function () {
        },
        responsive: true,
        legend: {
          position: 'right',
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
              callback: function (value, index, values) {
                return '    ' + value + '%';
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
              // labelString: 'abc',
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
            if (tooltip.dataPoints) {
              if (tooltip.dataPoints[0].datasetIndex === 0) {
                tooltip.backgroundColor = '#fff';
                // tooltip.borderColor = 'rgba(255, 206, 86, 1)';
                tooltip.titleFontColor = 'rgba(255, 206, 86, 1)';
                tooltip.labelTextColors[0] = 'rgba(255, 206, 86, 1)';
                tooltip.borderColor = 'rgba(255, 206, 86, 1)';
                // tooltip.borderColor = 'black';

              } else if (tooltip.dataPoints[0].datasetIndex === 1) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = 'rgba(255,99,132,1)';
                // tooltip.labelColors[0].borderColor = 'rgba(255,99,132,1)';
                tooltip.titleFontColor = 'rgba(255,99,132,1)';
                // tooltip.labelColors[0].borderColor = 'rgba(255,99,132,1)';
                // tooltip.labelColors[0].backgroundColor = 'rgba(255,99,132,1)';
                tooltip.labelTextColors[0] = 'rgba(255,99,132,1)';
              }
              console.log(tooltip);
            }
          },
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              // console.log(chart.config.data.datasets[tooltipItem.datasetIndex]);
              const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              // return {
              //   backgroundColor : 'dataset.backgroundColor',
              //   borderColor: dataset.borderColor,
              // }
              console.log(dataset);
              return {
                borderColor: 'green',
                backgroundColor: 'black'
              };
            },
            label: function (tooltipItem, data) {
              // const dslabels = data.labels[tooltipItem.index];
              const dataset = data.datasets[tooltipItem.datasetIndex];
              // const dslabelamtX = dataset.data[tooltipItem.index]['x'];
              const dslabelamtY = dataset.data[tooltipItem.index]['y'];
              if (dataset.label === 'TOP') {
                // console.log(dataset.label);
              }
              console.log(tooltipItem);
              console.log(data);
              // // return dslabels + '-' + data.datasets[tooltipItem.datasetIndex].label + ': ' + dslabelamt;
              return data.datasets[tooltipItem.datasetIndex].label + '   ' + dslabelamtY + '%';
              // return tooltipItem.yLabel + Number(tooltipItem.yLabel);
            },

            // title: function (tooltipItems, data) {
            //   // Pick first xLabel for now
            //   let title = 'asdas';
            //   // const labels = data.labels;
            //   // const labelCount = labels ? labels.length : 0;
            //   //
            //   // if (tooltipItems.length > 0) {
            //   //   const item = tooltipItems[0];
            //   //
            //   //   if (item.xLabel) {
            //   //     title = item.xLabel;
            //   //   } else if (labelCount > 0 && item.index < labelCount) {
            //   //   }
            //   // }
            //
            //   return title;
            // },
            // beforeLabel: function(tooltipItem, data) {
            //   return tooltipItem.xLabel;
            // }
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

  ngAfterViewInit(): void {
  }

}
