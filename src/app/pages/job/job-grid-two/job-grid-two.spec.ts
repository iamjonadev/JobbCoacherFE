import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridTwo } from './job-grid-two';

describe('JobGridTwo', () => {
  let component: JobGridTwo;
  let fixture: ComponentFixture<JobGridTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
