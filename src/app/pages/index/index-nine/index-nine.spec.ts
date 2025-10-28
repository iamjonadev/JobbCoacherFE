import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNine } from './index-nine';

describe('IndexNine', () => {
  let component: IndexNine;
  let fixture: ComponentFixture<IndexNine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexNine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexNine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
