import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTen } from './index-ten';

describe('IndexTen', () => {
  let component: IndexTen;
  let fixture: ComponentFixture<IndexTen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
