import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridOne } from './job-grid-one';

describe('JobGridOne', () => {
  let component: JobGridOne;
  let fixture: ComponentFixture<JobGridOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
