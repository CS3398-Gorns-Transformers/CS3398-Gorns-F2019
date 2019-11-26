import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartonCreekPage } from './barton-creek.page';

describe('BartonCreekPage', () => {
  let component: BartonCreekPage;
  let fixture: ComponentFixture<BartonCreekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartonCreekPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartonCreekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
