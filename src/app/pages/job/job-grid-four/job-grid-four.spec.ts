import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridFour } from './job-grid-four';

describe('JobGridFour', () => {
  let component: JobGridFour;
  let fixture: ComponentFixture<JobGridFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGridFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGridFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
