import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
// import * as Chart from 'chart.js';


declare var $: any;

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {
  chart1: any;
  backgroundColor1 = ['rgba(0, 0, 0,0.3)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  borderColor1 = ['rgba(0, 0, 0,0.3)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];

  constructor() {
  }

  ngOnInit() {

    // Chart.defaults.line.showLines = true;
    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw: function (ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          const activePoint = this.chart.tooltip._active[0],
            ctx = this.chart.ctx,
            x = activePoint.tooltipPosition().x,
            topY = this.chart.scales['y-axis-0'].top,
            bottomY = this.chart.scales['y-axis-0'].bottom;
          // draw line
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 2;
          ctx.setLineDash([8, 4]);
          ctx.strokeStyle = '#e7e7e7';
          ctx.stroke();
          ctx.restore();
        }
      }
    });
    const customTooltips = function (tooltip) {
      const borderColor1 = ['rgba(0,0,0,0.5)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
      let tooltipEl = document.querySelector('.tooltip') as HTMLElement;
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
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip';
      }
      const bgColor = 'background-color: ' + tooltip.backgroundColor;
      const fontColor = 'color: ' + tooltip.titleFontColor;
      const border = 'border: 1px solid ' + tooltip.borderColor;
      const innerTable = '<table style=" ' + bgColor + ';' + border + ';margin-left: 10px;' + fontColor + '"></table>';
      // console.log(tooltip.borderColor);
      // console.log(innerTable);
      tooltipEl.innerHTML = innerTable;
      this._chart.canvas.parentNode.appendChild(tooltipEl);
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = '0';
        return;
      }
      tooltipEl.classList.remove('above', 'below', 'no-transform');
      if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
      } else {
        tooltipEl.classList.add('no-transform');
      }

      function getBody(bodyItem) {
        return bodyItem.lines;
      }

      if (tooltip.body) {
        // console.log(tooltip.body);
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(getBody);

        let innerHtml = '<thead>';

        titleLines.forEach(function (title) {
          innerHtml += '<tr><th>' + title + '</th></tr>';
        });
        innerHtml += '</thead><tbody>';

        bodyLines.forEach(function (body, i) {
          const colors = tooltip.labelColors[i];
          // console.log(tooltip.borderColor);
          let style = 'background:' + tooltip.backgroundColor;
          style += '; border-color:' + colors.borderColor;
          style += '; border-width: 2px';
          const span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
          innerHtml += '<tr><td>' + span + body + '</td></tr>';
          // console.log(tooltip);
        });
        innerHtml += '</tbody>';
        const tableRoot = tooltipEl.querySelector('table') as HTMLElement;
        tableRoot.innerHTML = innerHtml;
        // console.log(innerHtml);
      }
      const positionX = this._chart.canvas.offsetLeft;
      const positionY = this._chart.canvas.offsetTop;
      const chartWidth = this._chart.canvas.offsetWidth;
// Display, position, and set styles for font
      tooltipEl.style.opacity = '1';
      tooltipEl.style.left = positionX + tooltip.caretX + 'px';
      tooltipEl.style.top = positionY + tooltip.caretY + 'px';
      tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
      tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
      tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
      tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      // console.log(chartWidth);
      if ((positionX + tooltip.caretX) > chartWidth - 70) {
        tooltipEl.style.left = chartWidth - 190 + 'px';
      }
      // console.log(tooltipEl.style.left);
      // console.log(tooltipEl.style.right);
      // console.log(tooltip.caretX);
      // console.log(tooltip.caretY);
      // console.log(positionX);
      // console.log(positionY);
      // console.log(tooltip);
      // console.log(this._chart.canvas);

    };
    this.chart1 = new Chart('canvas1', {
      type: 'LineWithLine',
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
                x: new Date('01/12/2019'), y: 20

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
                x: new Date('01/12/2019'), y: 5

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
                x: new Date('09/12/2018'), y: 42
              },
              {
                x: new Date('10/12/2018'), y: 30
              },
              {
                x: new Date('11/12/2018'), y: 25

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
        animation: {
          duration: 0,
          onComplete: function () {
            const ctx = this.chart.ctx;
            // ctx.fillStyle = this.scale.textColor;
            // console.log(this.data.datasets);
            this.data.datasets.map(dataset => {
              const lastestData = dataset._meta[0].data.length - 1;
              const left = dataset._meta[0].data[lastestData]._model.x;
              const top = dataset._meta[0].data[lastestData]._model.y;
              ctx.fillStyle = dataset.backgroundColor;
              ctx.fillText(dataset.label, left + 10, top + 4);
              // console.log(ctx.fillStyle);
              // console.log(dataset.backgroundColor);
              // console.log(ctx);
            });
          }
        },
        hover: {
          onHover: function (e, el) {
            // document.getElementById('canvas1').style.cursor = 'pointer';
            $('#canvas1').css('cursor', el[0] ? 'pointer' : 'default');
          }
        },
        responsive: true,
        // legend: {
        //   position: 'bottom',
        //   labels: {
        //     // boxWidth: 10
        //   }
        // },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            // boxWidth: 10
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
              drawTicks: true
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
                // quarter: 'YYYY'
              },
              tooltipFormat: 'YYYY年MM月DD日',
              round: 'month',
              stepSize: 1,
            },
            scaleLabel: {
              display: true,
              fontSize: 30,
            },
            gridLines: {
              offsetGridLines: false,
              display: false,
              borderDash: [8, 4],
            }
          }]
        },
        tooltips: {
          custom: customTooltips,
          callbacks: {
            label: function (tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const dslabelamtY = dataset.data[tooltipItem.index]['y'];
              // console.log(tooltipItem);
              // console.log(data);
              return data.datasets[tooltipItem.datasetIndex].label + ' ' + dslabelamtY + '%';
            },

          },
          // position: 'nearest',
          mode: 'point',
          yPadding: 10,
          xPadding: 10,
          caretSize: 4,
          intersect: false,
          // backgroundColor: 'rgba(255,99,132,1)',
          // borderColor: 'red',
          displayColors: false,
          borderWidth: 2,
          enabled: false
          // bodyFontColor: 'rgba(255,99,132,1)',
          // titleFontColor: 'rgba(255,99,132,1)',
        },
      },
    });
  }

}
