import { createFeatureSelector, createSelector } from '@ngrx/store';


import * as fromStarlinkSatellites from '../reducer/starlink-satellites.reducer';

export const selectStarlinkSatellitesState = createFeatureSelector<fromStarlinkSatellites.StarlinkSatellitesState>(
    fromStarlinkSatellites.starlinkSatellitesFeatureKey,
);
export const selectStarlinkSatellites = createSelector(
  selectStarlinkSatellitesState,
  (state: fromStarlinkSatellites.StarlinkSatellitesState) => state.starlink_satellites
);