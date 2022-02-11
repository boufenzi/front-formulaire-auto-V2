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
@NgModule({
  declarations: [
    DateBuilderComponent,
    MultiChoiceBuilderComponent,
    InputBuilderComponent,
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    DateBuilderComponent,
    MultiChoiceBuilderComponent,
    InputBuilderComponent,
  ],
})
export class BuilderModule {}
