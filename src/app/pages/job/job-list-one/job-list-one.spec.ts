import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListOne } from './job-list-one';

describe('JobListOne', () => {
  let component: JobListOne;
  let fixture: ComponentFixture<JobListOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
