import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListTwo } from './job-list-two';

describe('JobListTwo', () => {
  let component: JobListTwo;
  let fixture: ComponentFixture<JobListTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
