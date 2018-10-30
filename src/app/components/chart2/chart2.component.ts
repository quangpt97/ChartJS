import {Component, OnInit} from '@angular/core';
// import * as Chart from 'chart.js';

// declare var $: any;

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
  chart2: any;
  backgroundColor2 = ['rgba(0, 0, 0,0.5)', 'rgba(196, 123, 45,1)', 'rgba(255, 206, 86, 1)', 'rgba(31, 239, 236,1)'];
  borderColor2 = ['rgba(0, 0, 0,0.5)', 'rgba(196, 123, 45,1)', 'rgba(255, 206, 86, 1)', 'rgba(31, 239, 236,1)'];
  today = new Date();
  currentYear = this.today.getFullYear();
  currentMonth = 9;
  clickBack = 0;
  clickNext = 0;
  data1 = [
    {
      x: new Date('9/12/2018'), y: 1200

    },
    {
      x: new Date('10/12/2018'), y: 1200

    },
    {
      x: new Date('11/12/2018'), y: 2000
    },
    {
      x: new Date('12/12/2018'), y: 1400

    },
    {
      x: new Date('01/12/2019'), y: 1325

    }
  ];
  data2 = [
    {
      x: new Date('09/12/2018'), y: 1800
    },
    {
      x: new Date('10/12/2018'), y: 1700
    },
    {
      x: new Date('11/12/2018'), y: 1400

    },
    {
      x: new Date('12/12/2018'), y: 2220

    },
    {
      x: new Date('01/12/2019'), y: 2590

    }
  ];
  data3 = [
    {
      x: new Date('09/12/2018'), y: 1460
    },
    {
      x: new Date('10/12/2018'), y: 880
    },
    {
      x: new Date('11/12/2018'), y: 1400

    },
    {
      x: new Date('12/12/2018'), y: 2540

    },
    {
      x: new Date('01/12/2019'), y: 2000

    }
  ];
  data4 = [
    {
      x: new Date('09/12/2018'), y: 1060
    },
    {
      x: new Date('10/12/2018'), y: 3000
    },
    {
      x: new Date('11/12/2018'), y: 2000

    },
    {
      x: new Date('12/12/2018'), y: 1300

    },
    {
      x: new Date('01/12/2019'), y: 3700

    }
  ];

  constructor() {
  }

  ngOnInit() {

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
      const borderColor2 = ['rgba(0, 0, 0,0.5)', 'rgba(196, 123, 45,1)', 'rgba(255, 206, 86, 1)', 'rgba(31, 239, 236,1)'];
      let tooltipEl = document.querySelector('.tooltip') as HTMLElement;
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
      if ((positionX + tooltip.caretX) > chartWidth - 100) {
        tooltipEl.style.left = chartWidth - 190 + 'px';
      }

    };
    this.chart2 = new Chart('canvas2', {
      type: 'LineWithLine',
      data: {
        datasets: [
          {
            label: `TOP 送信`,
            data: this.data1,
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
            data: this.data2,
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
            data: this.data3,
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
            data: this.data4,
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
        animation: {
          duration: 0,
          onComplete: function () {
            const ctx = this.chart.ctx;
            this.data.datasets.map(dataset => {
              const lastestData = dataset._meta[1].data.length - 1;
              const left = dataset._meta[1].data[lastestData]._model.x;
              const top = dataset._meta[1].data[lastestData]._model.y;
              ctx.fillStyle = dataset.backgroundColor;
              ctx.fillText(dataset.label, left + 10, top + 4);
            });
          }
        },
        hover: {
          onHover: function (e, el) {
            // $('#canvas2').css('cursor', el[0] ? 'pointer' : 'default');
          }
        },
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
                return '    ' + value + '件';
              },
            },
            position: 'right',
            gridLines: {
              display: true,
              drawBorder: false,
              zeroLineWidth: 1,
              zeroLineColor: '#f5f4f0',
              color: '#f5f4f0',
              tickMarkLength: 40,
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
                'month': 'M月Y',
                quarter: 'YYYY'
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
              offsetGridLines: true,
              display: false
            },
          }]
        },
        tooltips: {
          custom: customTooltips,
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
        }
      }
    });
  }

  randomizeDataBack() {
    if (this.clickBack === 0 && this.clickNext === 1) {
      if (this.currentMonth - 4 > 0) {
        this.currentMonth -= 4;
      } else {
        this.currentMonth = 12 - Math.abs(this.currentMonth - 4);
        this.currentYear -= 1;
      }
    }
    this.clickBack = 1;
    this.clickNext = 0;
    let currentYear = this.currentYear;
    console.log(this.currentMonth);
    console.log(this.currentYear);

    if (this.currentMonth - 5 > 0) {
      this.currentMonth -= 5;
    } else {
      this.currentMonth = 12 + this.currentMonth - 5;
      currentYear -= 1;
    }
    console.log(this.currentMonth);

    let currentMonth1 = this.currentMonth + 1;
    let currentMonth2 = this.currentMonth + 2;
    let currentMonth3 = this.currentMonth + 3;
    let currentMonth4 = this.currentMonth + 4;
    let currentYear1 = this.currentYear;
    let currentYear2 = this.currentYear;
    let currentYear3 = this.currentYear;
    let currentYear4 = this.currentYear;
    if (currentMonth1 >= 12 || currentMonth2 >= 12 || currentMonth3 >= 12 || currentMonth4 >= 12) {
      currentYear1 -= 1;
      currentYear2 -= 1;
      currentYear3 -= 1;
      currentYear4 -= 1;
      if (currentMonth1 > 12) {
        currentMonth1 = currentMonth1 - 12;
        currentYear1 += 1;
      }
      if (currentMonth2 > 12) {
        currentMonth2 = currentMonth2 - 12;
        currentYear2 += 1;

      }
      if (currentMonth3 > 12) {
        currentMonth3 = currentMonth3 - 12;
        currentYear3 += 1;
      }
      if (currentMonth4 > 12) {
        currentMonth4 = currentMonth4 - 12;
        currentYear4 += 1;
      }
    }
    console.log(currentYear1);
    console.log(currentYear2);
    console.log(currentYear3);
    console.log(currentYear4);
    console.log(currentYear);

    const newData1 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 2000)
      }
    ];
    const newData2 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 2000)
      }
    ];
    const newData3 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 2000)
      }
    ];
    const newData4 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 2000)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 2000)
      }
    ];
    this.chart2.data.datasets[0].data = newData1;
    this.chart2.data.datasets[1].data = newData2;
    this.chart2.data.datasets[2].data = newData3;
    this.chart2.data.datasets[3].data = newData4;
    this.chart2.update();
  }
  randomizeDataNext() {
    if (this.clickBack === 0 && this.clickNext === 0) {
      this.currentMonth = 1;
      this.currentYear = 2019;
    }
    if (this.clickBack === 1 && this.clickNext === 0) {
      if (this.currentMonth + 4 <= 12) {
        this.currentMonth += 4;
      } else {
        this.currentMonth = this.currentMonth - 8;
        this.currentYear += 1;
      }
    }
    this.clickNext = 1;
    this.clickBack = 0;

    console.log(this.currentMonth);
    let currentYear = this.currentYear;

    console.log(this.currentYear);

    if (this.currentMonth + 5 <= 12) {
      this.currentMonth += 5;
    } else {
      this.currentMonth = this.currentMonth + 5 - 12;
      currentYear += 1;
    }
    console.log(this.currentMonth);

    let currentMonth1 = this.currentMonth - 4;
    let currentMonth2 = this.currentMonth - 3;
    let currentMonth3 = this.currentMonth - 2;
    let currentMonth4 = this.currentMonth - 1;
    let currentYear1 = this.currentYear;
    let currentYear2 = this.currentYear;
    let currentYear3 = this.currentYear;
    let currentYear4 = this.currentYear;
    if (currentMonth1 <= 1 || currentMonth2 <= 1 || currentMonth3 <= 1 || currentMonth4 <= 1) {
      currentYear1 += 1;
      currentYear2 += 1;
      currentYear3 += 1;
      currentYear4 += 1;
      if (currentMonth1 < 1) {
        currentMonth1 = 12 - Math.abs(currentMonth1);
        currentYear1 -= 1;
      }
      if (currentMonth2 < 1) {
        currentMonth2 = 12 - Math.abs(currentMonth2);
        currentYear2 -= 1;

      }
      if (currentMonth3 < 1) {
        currentMonth3 = 12 - Math.abs(currentMonth3);
        currentYear3 -= 1;
      }
      if (currentMonth4 < 1) {
        currentMonth4 = 12 - Math.abs(currentMonth4);
        currentYear4 -= 1;
      }
    }
    console.log(currentYear1);
    console.log(currentYear2);
    console.log(currentYear3);
    console.log(currentYear4);
    console.log(currentYear);

    const newData1 = [
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 60)
      },
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      }
    ];
    const newData2 = [
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 60)
      },
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      }
    ];
    const newData3 = [
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 60)
      },
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      }
    ];
    const newData4 = [
      {
        x: currentMonth1 + '/12/' + currentYear1, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth2 + '/12/' + currentYear2, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth3 + '/12/' + currentYear3, y: Math.floor(Math.random() * 60)
      },
      {
        x: currentMonth4 + '/12/' + currentYear4, y: Math.floor(Math.random() * 60)
      },
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      }
    ];
    this.chart2.data.datasets[0].data = newData1;
    this.chart2.data.datasets[1].data = newData2;
    this.chart2.data.datasets[2].data = newData3;
    this.chart2.data.datasets[3].data = newData4;
    this.chart2.update();
    this.currentYear = Math.max(currentYear, currentYear1, currentYear2, currentYear3, currentYear4);
  }
}
