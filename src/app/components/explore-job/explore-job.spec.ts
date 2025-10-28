import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreJob } from './explore-job';

describe('ExploreJob', () => {
  let component: ExploreJob;
  let fixture: ComponentFixture<ExploreJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
