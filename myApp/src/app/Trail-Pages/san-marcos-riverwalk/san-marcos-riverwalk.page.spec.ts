import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanMarcosRiverwalkPage } from './san-marcos-riverwalk.page';

describe('SanMarcosRiverwalkPage', () => {
  let component: SanMarcosRiverwalkPage;
  let fixture: ComponentFixture<SanMarcosRiverwalkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanMarcosRiverwalkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanMarcosRiverwalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
