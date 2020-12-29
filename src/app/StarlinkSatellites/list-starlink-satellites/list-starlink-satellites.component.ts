import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {StarlinkSatellites} from '../../models/starlink-satellites';
import {select, Store} from '@ngrx/store';
import {selectStarlinkSatellites} from '../store/selector/starlink-satellites.selectors';
import {StarlinkSatellitesState} from '../store/reducer/starlink-satellites.reducer';

import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list-starlink-satellites',
  templateUrl: './list-starlink-satellites.component.html',
  styleUrls: ['./list-starlink-satellites.component.scss']
})
export class ListStarlinkSatellitesComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'starlink_object_name', 'starlink_object_id', 'launch_date'];
  dataSource: any[] = [];

  lowValue: number = 0;
  highValue: number = 20;
  // used to build an array of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  starlinkSatellites$: Observable<StarlinkSatellites[]>;
  
  constructor(private store: Store<StarlinkSatellitesState>) {
    this.starlinkSatellites$ = this.store.pipe(select(selectStarlinkSatellites));
  }

  

  ngOnInit(): void {
  }

}
