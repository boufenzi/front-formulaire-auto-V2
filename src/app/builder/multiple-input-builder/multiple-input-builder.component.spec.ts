import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleInputBuilderComponent } from './multiple-input-builder.component';

describe('MultipleInputBuilderComponent', () => {
  let component: MultipleInputBuilderComponent;
  let fixture: ComponentFixture<MultipleInputBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleInputBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleInputBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
