import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueAns } from './que-ans';

describe('QueAns', () => {
  let component: QueAns;
  let fixture: ComponentFixture<QueAns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueAns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueAns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
