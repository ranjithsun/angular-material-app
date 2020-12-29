import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {StarlinkSatellites} from '../../models/starlink-satellites';
import {loadStarlinkSatellitess} from '../store/action/starlink-satellites.actions';
import {StarlinkSatellitesState} from '../store/reducer/starlink-satellites.reducer';

import { FetchAPIService } from '../../services/fetch-api.service';

@Component({
  selector: 'app-starlink-satellites',
  templateUrl: './starlink-satellites.component.html',
  styleUrls: ['./starlink-satellites.component.scss']
})
export class StarlinkSatellitesComponent implements OnInit {

  url = 'https://api.spacexdata.com/v4/starlink';

  constructor(private store: Store<StarlinkSatellitesState>, public FetchAPI: FetchAPIService) { }

  fetchStarlinkSatellites(url:string){
    /* this.store.dispatch(loadCustomer(customer)); */
      const starlinkSatellites = new StarlinkSatellites;
      return this.FetchAPI.getStarlinkSatellites(this.url).subscribe((data: {}) => {
        starlinkSatellites.starlinkSatellitesList = data;
        this.store.dispatch(loadStarlinkSatellitess(starlinkSatellites));
      })
  }

  ngOnInit(): void {
    this.fetchStarlinkSatellites(this.url);
  }

}
