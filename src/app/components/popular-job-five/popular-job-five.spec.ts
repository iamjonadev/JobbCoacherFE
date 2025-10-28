import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobFive } from './popular-job-five';

describe('PopularJobFive', () => {
  let component: PopularJobFive;
  let fixture: ComponentFixture<PopularJobFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
