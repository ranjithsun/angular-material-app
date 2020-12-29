import { createAction, props } from '@ngrx/store';
import { StarlinkSatellites } from '../../../models/starlink-satellites';

export const loadStarlinkSatellitess = createAction(
  '[StarlinkSatellites] Load StarlinkSatellitess',
  (starlinkSatellites: StarlinkSatellites) => ({starlinkSatellites})
);




