import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FailedLaunchesComponent } from './FailedLaunches/failed-launches/failed-launches.component';
import { StarlinkSatellitesComponent } from './StarlinkSatellites/starlink-satellites/starlink-satellites.component';


const appRoutes: Routes = [
  { path: '', component: FailedLaunchesComponent, data: { title: 'Failed Launches Component' } },
  { path: 'failed-launches', component: FailedLaunchesComponent, data: { title: 'Failed Launches Component' } },
  { path: 'starlink-satellites', component: StarlinkSatellitesComponent, data: { title: 'Starlink Satellites Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
