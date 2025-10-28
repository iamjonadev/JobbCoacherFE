import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSeven } from './index-seven';

describe('IndexSeven', () => {
  let component: IndexSeven;
  let fixture: ComponentFixture<IndexSeven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSeven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSeven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
