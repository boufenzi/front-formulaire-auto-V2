import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinFormBuilderComponent } from './fin-form-builder.component';

describe('FinFormBuilderComponent', () => {
  let component: FinFormBuilderComponent;
  let fixture: ComponentFixture<FinFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
