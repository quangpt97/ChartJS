import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChartComponent} from './pages/chart/chart.component';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {ChartBarComponent} from './pages/chart-bar/chart-bar.component';
import {Chart1Component} from './components/chart1/chart1.component';
import {Chart2Component} from './components/chart2/chart2.component';
import {Chart3Component} from './components/chart3/chart3.component';
import {Chart4Component} from './components/chart4/chart4.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HeaderComponent,
    SideBarComponent,
    ChartBarComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
