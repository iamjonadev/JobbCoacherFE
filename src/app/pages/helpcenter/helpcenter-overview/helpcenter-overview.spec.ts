import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterOverview } from './helpcenter-overview';

describe('HelpcenterOverview', () => {
  let component: HelpcenterOverview;
  let fixture: ComponentFixture<HelpcenterOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcenterOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpcenterOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
