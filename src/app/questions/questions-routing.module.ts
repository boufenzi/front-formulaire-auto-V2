import { InputBuilderComponent } from './../builder/input-builder/input-builder.component';
import { MultiChoiceBuilderComponent } from './../builder/multi-choice-builder/multi-choice-builder.component';
import { DateBuilderComponent } from './../builder/date-builder/date-builder.component';
import { QuestionRoutingComponent } from './question-routing/question-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'question',
    component: QuestionRoutingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
