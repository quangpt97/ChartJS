import {Component, OnInit} from '@angular/core';
// import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss']
})
export class Chart4Component implements OnInit {
  chart4: any;
  backgroundColor4 = ['rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  borderColor4 = ['rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  data1 = [10, 20, 5, 7, 9, 3, 4, 6, 12, 45, 16];
  data2 = [4, 6, 12, 5, 7, 11, 45, 19, 26, 12, 23];

  constructor() {
  }

  ngOnInit() {
    const customTooltips = function (tooltip) {
      const borderColor4 = ['rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
      let tooltipEl = document.querySelector('.tooltip') as HTMLElement;
      if (tooltip.dataPoints) {
        if (tooltip.dataPoints[0].datasetIndex === 0) {
          tooltip.backgroundColor = '#fff';
          tooltip.titleFontColor = borderColor4[0];
          tooltip.labelTextColors[0] = borderColor4[0];
          tooltip.borderColor = borderColor4[0];
        } else if (tooltip.dataPoints[0].datasetIndex === 1) {
          tooltip.backgroundColor = '#fff';
          tooltip.borderColor = borderColor4[1];
          tooltip.titleFontColor = borderColor4[1];
          tooltip.labelTextColors[0] = borderColor4[1];
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
      const innerTable = '<table style=" ' + bgColor + ';' + border + ';margin-left: 10px;width: 60px;' + fontColor + '"></table>';
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
        tooltipEl.style.left = chartWidth - 140 + 'px';
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
    this.chart4 = new Chart('canvas4', {
      type: 'bar',
      data: {
        labels: ['0回', '1回', '2回', '3回', '4回', '5回', '6回', '7回', '8回', '9回', '10回'],
        datasets: [
          {
            label: '自社',
            data: this.data1,
            backgroundColor: this.backgroundColor4[0],
            borderColor: this.borderColor4[0],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor4[0],
            pointBackgroundColor: this.borderColor4[0],
          },
          {
            label: '平均',
            data: this.data2,
            backgroundColor: this.backgroundColor4[1],
            borderColor: this.borderColor4[1],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor4[1],
            pointBackgroundColor: this.borderColor4[1],
          }
        ]
      },
      options: {
        animation: {
          duration: 0,
          onComplete: function () {
            const ctx = this.chart.ctx;
            // console.log(this.chart.scales);
            // console.log(this.chart.chartArea.right);
            const right = this.chart.chartArea.right;
            const bottom = this.chart.chartArea.bottom;
            ctx.fillStyle = '#333';
            ctx.fillText('以上', right - 35, bottom + 30);
            // ctx.fillStyle = this.scale.textColor;
            console.log(this.chart);
            console.log(this.data.datasets);
            let max = this.data.datasets[0]._meta[3].data[0]._model.y;
            this.data.datasets.map(dataset => {
              const top = dataset._meta[3].data[0]._model.y;
              if (max > top) {
                max = top;
              }
              // console.log(max);
            });
            let count = 0;
            this.data.datasets.map(dataset => {
              count += 5;
              const left = dataset._meta[3].data[0]._model.x;
              // console.log(left);
              const text = dataset.label + '  ';
              ctx.fillStyle = dataset.backgroundColor;
              ctx.fillText(text, left - 20 + count, max - 40);
              // console.log(text);
              // ctx.fillStyle = dataset.backgroundColor;
              // console.log(ctx.fillStyle);
              // console.log(dataset.backgroundColor);
              // console.log(ctx);
            });
          }
        },
        onHover: function () {
        },
        responsive: true,
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            boxWidth: 0,
            fontColor: 'red'
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
          scaleLabel: '<%= \' \' + value%> %',
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 10,
              max: 50,
              stepSize: 10,
              callback: function (value) {
                return value + '回';
              }
            },
            position: 'right',
            gridLines: {
              display: true,
              drawBorder: false
            },
          }],
          xAxes: [{
            ticks: {
              padding: -7,
            },
            scaleLabel: {
              display: true,
              fontSize: 30,
            },
            gridLines: {
              offsetGridLines: false,
              display: false,
              lineWidth: 0,
              drawOnChartArea: false
            },

          }]
        },
        tooltips: {
          custom: customTooltips,
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                borderColor: 'red',
                backgroundColor: 'red'
              };
            },
            label: function (tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const dslabelamtY = dataset.data[tooltipItem.index];
              return data.datasets[tooltipItem.datasetIndex].label + '   ' + dslabelamtY;
            },
          },
          // mode: 'point',
          // borderColor: 'red',
          // displayColors: false,
          // borderWidth: 2,
          // yPadding: 10,
          // xPadding: 10,
          caretSize: 6,
          enabled: false
        }
      }
    });
  }

  randomizeData() {
    const newData1 = this.data1.map(x => Math.floor(Math.random() * 40));
    const newData2 = this.data2.map(x => Math.floor(Math.random() * 40));

    this.chart4.data.datasets[0].data = newData1;
    this.chart4.data.datasets[1].data = newData2;
    this.chart4.update();
  }
}
