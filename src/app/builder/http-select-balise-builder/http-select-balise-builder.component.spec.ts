import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSelectBaliseBuilderComponent } from './http-select-balise-builder.component';

describe('HttpSelectBaliseBuilderComponent', () => {
  let component: HttpSelectBaliseBuilderComponent;
  let fixture: ComponentFixture<HttpSelectBaliseBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpSelectBaliseBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpSelectBaliseBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
