import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakebookingPage } from './makebooking.page';

describe('MakebookingPage', () => {
  let component: MakebookingPage;
  let fixture: ComponentFixture<MakebookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakebookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakebookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
