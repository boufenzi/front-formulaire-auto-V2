import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpChoicesBuilderComponent } from './http-choices-builder.component';

describe('HttpChoicesBuilderComponent', () => {
  let component: HttpChoicesBuilderComponent;
  let fixture: ComponentFixture<HttpChoicesBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpChoicesBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpChoicesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
