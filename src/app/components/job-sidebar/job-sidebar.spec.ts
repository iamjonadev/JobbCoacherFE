import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSidebar } from './job-sidebar';

describe('JobSidebar', () => {
  let component: JobSidebar;
  let fixture: ComponentFixture<JobSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
