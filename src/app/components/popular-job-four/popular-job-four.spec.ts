import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobFour } from './popular-job-four';

describe('PopularJobFour', () => {
  let component: PopularJobFour;
  let fixture: ComponentFixture<PopularJobFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
