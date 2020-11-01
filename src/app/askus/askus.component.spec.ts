/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AskusComponent } from './askus.component';

describe('AskusComponent', () => {
  let component: AskusComponent;
  let fixture: ComponentFixture<AskusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
