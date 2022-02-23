import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder-routing.module';
import { DateBuilderComponent } from './date-builder/date-builder.component';
import { MultiChoiceBuilderComponent } from './multi-choice-builder/multi-choice-builder.component';
import { InputBuilderComponent } from './input-builder/input-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PreviousQuestionComponent } from './previous-question/previous-question.component';
import { DateBuilderLimitationInputDirective } from '../directives/date-builder-limitation-input.directive';
import { HttpChoicesBuilderComponent } from './http-choices-builder/http-choices-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpChoicesSimpleButtonsBuilderComponent } from './http-choices-simple-buttons-builder/http-choices-simple-buttons-builder.component';
import { HttpSelectBaliseBuilderComponent } from './http-select-balise-builder/http-select-balise-builder.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingTemplateBuilderComponent } from './loading-template-builder/loading-template-builder.component';
import { FinFormBuilderComponent } from './fin-form-builder/fin-form-builder.component';
import { InputDateBuilderComponent } from './input-date-builder/input-date-builder.component';
import { MultipleInputBuilderComponent } from './multiple-input-builder/multiple-input-builder.component';
@NgModule({
  declarations: [
    DateBuilderComponent,
    MultiChoiceBuilderComponent,
    InputBuilderComponent,
    PreviousQuestionComponent,
    DateBuilderLimitationInputDirective,
    HttpChoicesBuilderComponent,
    HttpChoicesSimpleButtonsBuilderComponent,
    HttpSelectBaliseBuilderComponent,
    LoadingTemplateBuilderComponent,
    FinFormBuilderComponent,
    InputDateBuilderComponent,
    MultipleInputBuilderComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    DateBuilderComponent,
    MultiChoiceBuilderComponent,
    InputBuilderComponent,
    HttpChoicesBuilderComponent
  ],
})
export class BuilderModule { }
