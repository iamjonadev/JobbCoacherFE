import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCompaniesTwo } from './best-companies-two';

describe('BestCompaniesTwo', () => {
  let component: BestCompaniesTwo;
  let fixture: ComponentFixture<BestCompaniesTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestCompaniesTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCompaniesTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
