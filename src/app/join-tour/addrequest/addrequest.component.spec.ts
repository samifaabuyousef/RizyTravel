/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddrequestComponent } from './addrequest.component';

describe('AddrequestComponent', () => {
  let component: AddrequestComponent;
  let fixture: ComponentFixture<AddrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
