import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpChoicesSimpleButtonsBuilderComponent } from './http-choices-simple-buttons-builder.component';

describe('HttpChoicesSimpleButtonsBuilderComponent', () => {
  let component: HttpChoicesSimpleButtonsBuilderComponent;
  let fixture: ComponentFixture<HttpChoicesSimpleButtonsBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpChoicesSimpleButtonsBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpChoicesSimpleButtonsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
