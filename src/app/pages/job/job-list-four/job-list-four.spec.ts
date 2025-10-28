import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFour } from './job-list-four';

describe('JobListFour', () => {
  let component: JobListFour;
  let fixture: ComponentFixture<JobListFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
