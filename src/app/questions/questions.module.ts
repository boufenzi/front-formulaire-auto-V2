import { BuilderModule } from './../builder/builder.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionRoutingComponent } from './question-routing/question-routing.component';

@NgModule({
  declarations: [QuestionRoutingComponent],
  imports: [CommonModule, QuestionsRoutingModule, BuilderModule],
})
export class QuestionsModule {}
