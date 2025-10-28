import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFive } from './job-list-five';

describe('JobListFive', () => {
  let component: JobListFive;
  let fixture: ComponentFixture<JobListFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
