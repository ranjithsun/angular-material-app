import * as fromStarlinkSatellites from './starlink-satellites.actions';

describe('loadStarlinkSatellitess', () => {
  it('should return an action', () => {
    expect(fromStarlinkSatellites.addStarlinkSatellitess().type).toBe('[StarlinkSatellites] Add StarlinkSatellitess');
  });
});
