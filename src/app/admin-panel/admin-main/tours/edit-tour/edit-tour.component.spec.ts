/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditTourComponent } from './edit-tour.component';

describe('EditTourComponent', () => {
  let component: EditTourComponent;
  let fixture: ComponentFixture<EditTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
