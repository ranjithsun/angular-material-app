import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedLaunchesComponent } from './failed-launches.component';

describe('FailedLaunchesComponent', () => {
  let component: FailedLaunchesComponent;
  let fixture: ComponentFixture<FailedLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedLaunchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
