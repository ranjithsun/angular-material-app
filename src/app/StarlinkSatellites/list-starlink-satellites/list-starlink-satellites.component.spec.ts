import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarlinkSatellitesComponent } from './list-starlink-satellites.component';

describe('ListStarlinkSatellitesComponent', () => {
  let component: ListStarlinkSatellitesComponent;
  let fixture: ComponentFixture<ListStarlinkSatellitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStarlinkSatellitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStarlinkSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
