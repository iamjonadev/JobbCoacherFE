import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterFaqs } from './helpcenter-faqs';

describe('HelpcenterFaqs', () => {
  let component: HelpcenterFaqs;
  let fixture: ComponentFixture<HelpcenterFaqs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcenterFaqs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpcenterFaqs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
