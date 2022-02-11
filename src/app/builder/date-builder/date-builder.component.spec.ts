import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateBuilderComponent } from './date-builder.component';

describe('DateBuilderComponent', () => {
  let component: DateBuilderComponent;
  let fixture: ComponentFixture<DateBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
