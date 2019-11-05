import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyCreekTrailPage } from './turkey-creek-trail.page';

describe('TurkeyCreekTrailPage', () => {
  let component: TurkeyCreekTrailPage;
  let fixture: ComponentFixture<TurkeyCreekTrailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeyCreekTrailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyCreekTrailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
