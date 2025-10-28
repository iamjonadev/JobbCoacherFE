import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCompanies } from './best-companies';

describe('BestCompanies', () => {
  let component: BestCompanies;
  let fixture: ComponentFixture<BestCompanies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestCompanies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCompanies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
