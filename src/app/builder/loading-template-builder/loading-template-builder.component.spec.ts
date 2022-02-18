import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTemplateBuilderComponent } from './loading-template-builder.component';

describe('LoadingTemplateBuilderComponent', () => {
  let component: LoadingTemplateBuilderComponent;
  let fixture: ComponentFixture<LoadingTemplateBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingTemplateBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingTemplateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
