import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobOne } from './popular-job-one';

describe('PopularJobOne', () => {
  let component: PopularJobOne;
  let fixture: ComponentFixture<PopularJobOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
