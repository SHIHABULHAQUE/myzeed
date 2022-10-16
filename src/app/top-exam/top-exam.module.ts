import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopExamRoutingModule } from './top-exam-routing.module';
import { TopExamComponent } from './top-exam.component';


@NgModule({
  declarations: [
    TopExamComponent
  ],
  imports: [
    CommonModule,
    TopExamRoutingModule
  ]
})
export class TopExamModule { }
