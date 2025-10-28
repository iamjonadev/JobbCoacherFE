import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobThree } from './popular-job-three';

describe('PopularJobThree', () => {
  let component: PopularJobThree;
  let fixture: ComponentFixture<PopularJobThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
