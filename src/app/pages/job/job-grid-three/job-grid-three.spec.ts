import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridThree } from './job-grid-three';

describe('JobGridThree', () => {
  let component: JobGridThree;
  let fixture: ComponentFixture<JobGridThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
