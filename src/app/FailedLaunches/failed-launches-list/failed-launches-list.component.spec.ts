import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedLaunchesListComponent } from './failed-launches-list.component';

describe('FailedLaunchesListComponent', () => {
  let component: FailedLaunchesListComponent;
  let fixture: ComponentFixture<FailedLaunchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedLaunchesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedLaunchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
