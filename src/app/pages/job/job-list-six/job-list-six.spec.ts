import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListSix } from './job-list-six';

describe('JobListSix', () => {
  let component: JobListSix;
  let fixture: ComponentFixture<JobListSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
