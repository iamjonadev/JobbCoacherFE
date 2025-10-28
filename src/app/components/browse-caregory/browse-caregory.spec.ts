import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCaregory } from './browse-caregory';

describe('BrowseCaregory', () => {
  let component: BrowseCaregory;
  let fixture: ComponentFixture<BrowseCaregory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCaregory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseCaregory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
