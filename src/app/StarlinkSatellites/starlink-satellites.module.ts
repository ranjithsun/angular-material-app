import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarlinkSatellitesComponent } from './starlink-satellites/starlink-satellites.component';
import { ListStarlinkSatellitesComponent } from './list-starlink-satellites/list-starlink-satellites.component';

import {StoreModule} from '@ngrx/store';
import {starlinkSatellitesFeatureKey, reducer} from './store/reducer/starlink-satellites.reducer';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [StarlinkSatellitesComponent, ListStarlinkSatellitesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(starlinkSatellitesFeatureKey, reducer),
    MatTableModule,
    MatPaginatorModule
  ]
})
export class StarlinkSatellitesModule { }
