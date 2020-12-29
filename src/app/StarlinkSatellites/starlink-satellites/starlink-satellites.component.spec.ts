import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlinkSatellitesComponent } from './starlink-satellites.component';

describe('StarlinkSatellitesComponent', () => {
  let component: StarlinkSatellitesComponent;
  let fixture: ComponentFixture<StarlinkSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarlinkSatellitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarlinkSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
