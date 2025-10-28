import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategories } from './job-categories';

describe('JobCategories', () => {
  let component: JobCategories;
  let fixture: ComponentFixture<JobCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
