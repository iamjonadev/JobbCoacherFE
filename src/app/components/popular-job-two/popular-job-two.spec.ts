import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobTwo } from './popular-job-two';

describe('PopularJobTwo', () => {
  let component: PopularJobTwo;
  let fixture: ComponentFixture<PopularJobTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
