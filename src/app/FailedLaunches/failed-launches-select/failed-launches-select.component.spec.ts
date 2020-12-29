import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedLaunchesSelectComponent } from './failed-launches-select.component';

describe('FailedLaunchesSelectComponent', () => {
  let component: FailedLaunchesSelectComponent;
  let fixture: ComponentFixture<FailedLaunchesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedLaunchesSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedLaunchesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
