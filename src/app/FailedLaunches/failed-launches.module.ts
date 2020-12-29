import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { FailedLaunchesComponent } from './failed-launches/failed-launches.component';
import { FailedLaunchesSelectComponent } from './failed-launches-select/failed-launches-select.component';
import { FailedLaunchesListComponent } from './failed-launches-list/failed-launches-list.component';



@NgModule({
  declarations: [FailedLaunchesComponent, FailedLaunchesSelectComponent, FailedLaunchesListComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class FailedLaunchesModule { }
