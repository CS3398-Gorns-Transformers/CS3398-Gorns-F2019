import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexsTrailPage } from './texs-trail.page';

describe('TexsTrailPage', () => {
  let component: TexsTrailPage;
  let fixture: ComponentFixture<TexsTrailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexsTrailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexsTrailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
