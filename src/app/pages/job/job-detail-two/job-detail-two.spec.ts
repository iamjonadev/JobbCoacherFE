import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailTwo } from './job-detail-two';

describe('JobDetailTwo', () => {
  let component: JobDetailTwo;
  let fixture: ComponentFixture<JobDetailTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
