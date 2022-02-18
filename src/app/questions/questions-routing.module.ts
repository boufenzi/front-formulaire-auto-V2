import { InputBuilderComponent } from './../builder/input-builder/input-builder.component';
import { MultiChoiceBuilderComponent } from './../builder/multi-choice-builder/multi-choice-builder.component';
import { DateBuilderComponent } from './../builder/date-builder/date-builder.component';
import { QuestionRoutingComponent } from './question-routing/question-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpChoicesBuilderComponent } from '../builder/http-choices-builder/http-choices-builder.component';
import { HttpChoicesSimpleButtonsBuilderComponent } from '../builder/http-choices-simple-buttons-builder/http-choices-simple-buttons-builder.component';
import { HttpSelectBaliseBuilderComponent } from '../builder/http-select-balise-builder/http-select-balise-builder.component';
import { FinFormBuilderComponent } from '../builder/fin-form-builder/fin-form-builder.component';

const routes: Routes = [
  {
    path: 'dateBuilder',
    component: DateBuilderComponent,
  },
  {
    path: 'multiChoixBuilder',
    component: MultiChoiceBuilderComponent,
  },
  {
    path: 'inputBuilder',
    component: InputBuilderComponent,
  },
  {
    path: 'httpChoicesBuilder',
    component: HttpChoicesBuilderComponent,
  },
  {
    path: 'HttpChoicesSimpleButtonsBuilder',
    component: HttpChoicesSimpleButtonsBuilderComponent
  },
  {
    path: 'httpSelectBaliseBuilder',
    component: HttpSelectBaliseBuilderComponent
  },
  {
    path: 'finQuestionBuilder',
    component: FinFormBuilderComponent
  },
  {
    path: '**',
    component: QuestionRoutingComponent
  },
  {
    path: '',
    component: QuestionRoutingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule { }
