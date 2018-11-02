import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  chartName = 'All';
  chartTitle: string;
  userLang = navigator.language;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use(this.userLang);
  }

  ngOnInit(): void {
    console.log(this.userLang);
  }

  selectChart(chart: string) {
    switch (chart) {
      case 'canvas1' : {
        this.chartName = 'canvas1';
        this.chartTitle = 'chartTitle1';
        break;
      }
      case 'canvas2' : {
        this.chartName = 'canvas2';
        this.chartTitle = 'chartTitle2';
        break;
      }
      case 'canvas3' : {
        this.chartName = 'canvas3';
        this.chartTitle = 'chartTitle3';
        break;
      }
      case 'canvas4' : {
        this.chartName = 'canvas4';
        this.chartTitle = 'chartTitle4';
        break;
      }
      default: {
        this.chartName = 'All';
      }
    }
    // console.log(this.chartName);
    // const chartTitle = (document.getElementById(this.chartName) as HTMLElement).innerHTML;
    // console.log(chartTitle);
  }

  printChart() {
    if (this.chartName === 'All') {
      this.printAllChart();
    } else {
      this.printSingleChart(this.chartTitle, this.chartName);
    }
  }

  printSingleChart(title: string, name: string) {
    const chartTitle = (document.getElementById(title) as HTMLElement).innerHTML;
    const textMonth = (document.getElementById('textMonth') as HTMLElement).innerHTML;
    const canvas = document.getElementById(name) as HTMLCanvasElement;
    const imgUrl = canvas.toDataURL();
    const win = window.open();
    win.document.open();
    win.document.write(
      `<html>
            <head>
            </head>
            <body onload="window.print();window.close();window.focus()">
              <p style="padding-left: 220px">${chartTitle}<br><span style="padding-left: 70px">${textMonth}</span></p>
              <!--<p style="padding-left: 300px">${textMonth}</p>-->
              <img src="${imgUrl}" alt="chart">
            </body>
          </html>`
    );
    win.document.close();
  }

  printAllChart() {
    const textMonth = (document.getElementById('textMonth') as HTMLElement).innerHTML;
    const chartTitle1 = (document.getElementById('chartTitle1') as HTMLElement).innerHTML;
    const chartTitle2 = (document.getElementById('chartTitle2') as HTMLElement).innerHTML;
    const chartTitle3 = (document.getElementById('chartTitle3') as HTMLElement).innerHTML;
    const chartTitle4 = (document.getElementById('chartTitle4') as HTMLElement).innerHTML;
    const imgUrl1 = (document.getElementById('canvas1') as HTMLCanvasElement).toDataURL();
    const imgUrl2 = (document.getElementById('canvas2') as HTMLCanvasElement).toDataURL();
    const imgUrl3 = (document.getElementById('canvas3') as HTMLCanvasElement).toDataURL();
    const imgUrl4 = (document.getElementById('canvas4') as HTMLCanvasElement).toDataURL();
    const win = window.open();
    win.document.open();
    win.document.write(
      `<html>
            <head>
            </head>
            <body onload="window.print();window.close();window.focus()">
              <p style="padding-left: 220px">${chartTitle1}<br><span style="padding-left: 70px">${textMonth}</span></p>
              <img src="${imgUrl1}" alt="chart">
              <p style="padding-left: 220px">${chartTitle2}<br><span style="padding-left: 70px">${textMonth}</span></p>
              <img src="${imgUrl2}" alt="chart">
              <p style="padding-left: 220px">${chartTitle3}<br><span style="padding-left: 70px">${textMonth}</span></p>
              <img src="${imgUrl3}" alt="chart">
              <p style="padding-left: 220px">${chartTitle4}<br><span style="padding-left: 70px">${textMonth}</span></p>
              <img src="${imgUrl4}" alt="chart">
            </body>
          </html>`
    );
    win.document.close();
  }

}
