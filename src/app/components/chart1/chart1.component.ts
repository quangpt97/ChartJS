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
  today = new Date();
  currentYear = this.today.getFullYear();
  currentMonth = 9;
  clickBack = 0;
  clickNext = 0;
  data1 = [
    {
      x: new Date('9/12/2018'), y: 5

    },
    {
      x: new Date('10/12/2018'), y: 10

    },
    {
      x: new Date('11/12/2018'), y: 21
    },
    {
      x: new Date('12/12/2018'), y: 17

    },
    {
      x: new Date('01/12/2019'), y: 32

    }
  ];
  data2 = [
    {
      x: new Date('09/12/2018'), y: 27
    },
    {
      x: new Date('10/12/2018'), y: 36
    },
    {
      x: new Date('11/12/2018'), y: 12

    },
    {
      x: new Date('12/12/2018'), y: 45

    },
    {
      x: new Date('01/12/2019'), y: 50

    }
  ];
  data3 = [
    {
      x: new Date('09/12/2018'), y: 16
    },
    {
      x: new Date('10/12/2018'), y: 29
    },
    {
      x: new Date('11/12/2018'), y: 52

    },
    {
      x: new Date('12/12/2018'), y: 34

    },
    {
      x: new Date('01/12/2019'), y: 23

    }
  ];

  constructor() {
  }


  ngOnInit() {

    // Chart.defaults.line.showLines = true;
    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw: function (ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);
        // Draw label and year in bottom
        let i = -1;
        let yearOfFirstMonth =0;
        const ctx = this.chart.ctx;
        const right = this.chart.chartArea.right;
        const leftOfChart = this.chart.chartArea.left;
        const bottom = this.chart.chartArea.bottom;
        const max = this.chart.config.data.datasets[0].data.length;
        // const yearMax = new Date(this.chart.config.data.datasets[0].data[max - 1].x).getFullYear();
        const yearMin = new Date(this.chart.config.data.datasets[0].data[0].x).getFullYear();
        // draw year in x axis
        ctx.fillStyle = '#999';
        ctx.font = 'normal 12px Arial Helvetica Neue Helvetica sans-serif';
        // ctx.fillText(yearMax, right - 15, bottom + 30);
        ctx.fillText(yearMin, leftOfChart - 10, bottom + 30);
        console.log(this.chart.config.data.datasets[0].data);
        this.chart.config.data.datasets[0].data.map((data, index) => {
          const month = new Date(data.x).getMonth();
          if (month === 0) {
            i = index;
            yearOfFirstMonth = new Date(data.x).getFullYear();
          }
        });
        let check = false;
        this.chart.config.data.datasets.map(dataset => {
          const lastestData = dataset._meta[0].data.length - 1;
          const left = dataset._meta[0].data[lastestData]._model.x;
          const top = dataset._meta[0].data[lastestData]._model.y;
          ctx.fillStyle = dataset.backgroundColor;
          ctx.font = 'normal 12px Arial Helvetica Neue Helvetica sans-serif';
          ctx.fillText(dataset.label, left + 10, top + 4);
          dataset._meta[0].data.map((data, index) => {
            if (i > 0) {
              if (index === i && check === false) {
                const firstMonthOfYear_Left = dataset._meta[0].data[i]._model.x;
                // const firstMonthOfYear_Top = dataset._meta[0].data[i]._model.y;
                console.log('write');
                ctx.fillStyle = '#999';
                ctx.fillText(yearOfFirstMonth, firstMonthOfYear_Left - 10, bottom + 30);
                check = true;
                console.log('gogo');
              }
            }
          });

        });
        // draw line
        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          const activePoint = this.chart.tooltip._active[0],
            // ctx = this.chart.ctx,
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
      const borderColor2 = ['rgba(0, 0, 0,0.3)', 'rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
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
      if ((positionX + tooltip.caretX) > chartWidth - 70) {
        tooltipEl.style.left = chartWidth - 190 + 'px';
      }

    };
    this.chart1 = new Chart('canvas1', {
      type: 'LineWithLine',
      data: {
        datasets: [
          {
            label: 'TOP',
            data: this.data1,
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
            data: this.data2,
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
            data: this.data3,
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
        },
        hover: {
          onHover: function (e, el) {
            $('#canvas1').css('cursor', el[0] ? 'pointer' : 'default');
          }
        },
        responsive: true,
        legend: {
          display: false,
          position: 'bottom',
          labels: {}
        },
        plugins: {
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
            }

          },
        },
        scales: {
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
              return data.datasets[tooltipItem.datasetIndex].label + ' ' + dslabelamtY + '%';
            },

          },
          mode: 'point',
          yPadding: 10,
          xPadding: 10,
          caretSize: 4,
          intersect: false,
          displayColors: false,
          borderWidth: 2,
          enabled: false
        },
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
    // console.log(this.currentMonth);
    // console.log(this.currentYear);

    if (this.currentMonth - 5 > 0) {
      this.currentMonth -= 5;
    } else {
      this.currentMonth = 12 + this.currentMonth - 5;
      currentYear -= 1;
    }
    // console.log(this.currentMonth);

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
    // console.log(currentYear1);
    // console.log(currentYear2);
    // console.log(currentYear3);
    // console.log(currentYear4);
    // console.log(currentYear);

    const newData1 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      },
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
      }
    ];
    const newData2 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      },
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
      }
    ];
    const newData3 = [
      {
        x: this.currentMonth + '/12/' + currentYear, y: Math.floor(Math.random() * 60)
      },
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
      }
    ];
    this.chart1.data.datasets[0].data = newData1;
    this.chart1.data.datasets[1].data = newData2;
    this.chart1.data.datasets[2].data = newData3;
    this.chart1.update();
    this.currentYear = Math.min(currentYear, currentYear1, currentYear2, currentYear3, currentYear4);
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

    // console.log(this.currentMonth);
    let currentYear = this.currentYear;

    // console.log(this.currentYear);

    if (this.currentMonth + 5 <= 12) {
      this.currentMonth += 5;
    } else {
      this.currentMonth = this.currentMonth + 5 - 12;
      currentYear += 1;
    }
    // console.log(this.currentMonth);

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
    // console.log(currentYear1);
    // console.log(currentYear2);
    // console.log(currentYear3);
    // console.log(currentYear4);
    // console.log(currentYear);

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
    this.chart1.data.datasets[0].data = newData1;
    this.chart1.data.datasets[1].data = newData2;
    this.chart1.data.datasets[2].data = newData3;
    this.chart1.update();
    this.currentYear = Math.max(currentYear, currentYear1, currentYear2, currentYear3, currentYear4);
  }
}
