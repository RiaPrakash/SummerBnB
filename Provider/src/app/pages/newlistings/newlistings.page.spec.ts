import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlistingsPage } from './newlistings.page';

describe('NewlistingsPage', () => {
  let component: NewlistingsPage;
  let fixture: ComponentFixture<NewlistingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlistingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlistingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
