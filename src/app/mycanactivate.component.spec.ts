/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MycanactivateComponent } from './mycanactivate.component';

describe('MycanactivateComponent', () => {
  let component: MycanactivateComponent;
  let fixture: ComponentFixture<MycanactivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycanactivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycanactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
