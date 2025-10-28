import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListThree } from './job-list-three';

describe('JobListThree', () => {
  let component: JobListThree;
  let fixture: ComponentFixture<JobListThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
