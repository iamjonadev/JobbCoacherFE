import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailThree } from './job-detail-three';

describe('JobDetailThree', () => {
  let component: JobDetailThree;
  let fixture: ComponentFixture<JobDetailThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
