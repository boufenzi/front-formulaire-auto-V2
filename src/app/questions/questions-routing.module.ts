import { InputBuilderComponent } from './../builder/input-builder/input-builder.component';
import { MultiChoiceBuilderComponent } from './../builder/multi-choice-builder/multi-choice-builder.component';
import { DateBuilderComponent } from './../builder/date-builder/date-builder.component';
import { QuestionRoutingComponent } from './question-routing/question-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpChoicesBuilderComponent } from '../builder/http-choices-builder/http-choices-builder.component';
import { HttpChoicesSimpleButtonsBuilderComponent } from '../builder/http-choices-simple-buttons-builder/http-choices-simple-buttons-builder.component';

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
    path: '',
    component: QuestionRoutingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
