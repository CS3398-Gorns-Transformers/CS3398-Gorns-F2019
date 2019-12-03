import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverPlaceNatureTrailPage } from './river-place-nature-trail.page';

describe('RiverPlaceNatureTrailPage', () => {
  let component: RiverPlaceNatureTrailPage;
  let fixture: ComponentFixture<RiverPlaceNatureTrailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverPlaceNatureTrailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverPlaceNatureTrailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
