import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFiledropperComponent } from './ngx-filedropper.component';

describe('FiledropComponent', () => {
  let component: NgxFiledropperComponent;
  let fixture: ComponentFixture<NgxFiledropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFiledropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFiledropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});