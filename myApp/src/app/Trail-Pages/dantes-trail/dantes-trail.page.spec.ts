import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyCreekTrailPage } from './dantes-trail.page';

describe('DantesTrailPage', () => {
  let component: DantesTrailPage;
  let fixture: ComponentFixture<DantesTrailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DantesTrailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DantesTrailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
