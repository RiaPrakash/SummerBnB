import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurlistingsPage } from './curlistings.page';

describe('CurlistingsPage', () => {
  let component: CurlistingsPage;
  let fixture: ComponentFixture<CurlistingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurlistingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurlistingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
