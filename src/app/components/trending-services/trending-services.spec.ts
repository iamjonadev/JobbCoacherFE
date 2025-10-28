import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingServices } from './trending-services';

describe('TrendingServices', () => {
  let component: TrendingServices;
  let fixture: ComponentFixture<TrendingServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
