import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlistingPage } from './viewlisting.page';

describe('ViewlistingPage', () => {
  let component: ViewlistingPage;
  let fixture: ComponentFixture<ViewlistingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlistingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlistingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
