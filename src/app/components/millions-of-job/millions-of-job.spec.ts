import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillionsOfJob } from './millions-of-job';

describe('MillionsOfJob', () => {
  let component: MillionsOfJob;
  let fixture: ComponentFixture<MillionsOfJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MillionsOfJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillionsOfJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
