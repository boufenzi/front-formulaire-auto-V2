import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateBuilderComponent } from './input-date-builder.component';

describe('InputDateBuilderComponent', () => {
  let component: InputDateBuilderComponent;
  let fixture: ComponentFixture<InputDateBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDateBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
