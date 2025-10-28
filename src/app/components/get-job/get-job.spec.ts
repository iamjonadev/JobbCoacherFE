import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJob } from './get-job';

describe('GetJob', () => {
  let component: GetJob;
  let fixture: ComponentFixture<GetJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
