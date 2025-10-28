import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileSetting } from './candidate-profile-setting';

describe('CandidateProfileSetting', () => {
  let component: CandidateProfileSetting;
  let fixture: ComponentFixture<CandidateProfileSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateProfileSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateProfileSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
