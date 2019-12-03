import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringLakePreservePage } from './spring-lake-preserve.page';

describe('SpringLakePreservePage', () => {
  let component: SpringLakePreservePage;
  let fixture: ComponentFixture<SpringLakePreservePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringLakePreservePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringLakePreservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
