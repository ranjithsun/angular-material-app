import { Action, createReducer, on } from '@ngrx/store';
import * as StarlinkSatellitesAction from '../action/starlink-satellites.actions';
import { StarlinkSatellites } from '../../../models/starlink-satellites';

export const starlinkSatellitesFeatureKey = 'starlinkSatellites';

export interface StarlinkSatellitesState {
  starlink_satellites: StarlinkSatellites[];
}

export const initialState: StarlinkSatellitesState = {
  starlink_satellites:[]
};


export const starlinkSatellitesreducer = createReducer(
  initialState,
  on(StarlinkSatellitesAction.loadStarlinkSatellitess,
    (state: StarlinkSatellitesState, {starlinkSatellites}) =>
      ({...state,
        starlink_satellites: [starlinkSatellites]
      }))
);
export function reducer(state: StarlinkSatellitesState | undefined, action: Action): any {
  return starlinkSatellitesreducer(state, action);
}