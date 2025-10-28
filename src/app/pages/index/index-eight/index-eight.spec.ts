import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEight } from './index-eight';

describe('IndexEight', () => {
  let component: IndexEight;
  let fixture: ComponentFixture<IndexEight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexEight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexEight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
