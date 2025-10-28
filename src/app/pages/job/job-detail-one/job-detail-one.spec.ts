import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailOne } from './job-detail-one';

describe('JobDetailOne', () => {
  let component: JobDetailOne;
  let fixture: ComponentFixture<JobDetailOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
