import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterSupport } from './helpcenter-support';

describe('HelpcenterSupport', () => {
  let component: HelpcenterSupport;
  let fixture: ComponentFixture<HelpcenterSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcenterSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpcenterSupport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
