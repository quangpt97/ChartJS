import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChartComponent} from './pages/chart/chart.component';
import {ChartBarComponent} from './pages/chart-bar/chart-bar.component';

const routes: Routes = [
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'chartBar',
    component: ChartBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
