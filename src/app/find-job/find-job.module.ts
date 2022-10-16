import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindJobRoutingModule } from './find-job-routing.module';
import { FindJobComponent } from './find-job.component';


@NgModule({
  declarations: [
    FindJobComponent
  ],
  imports: [
    CommonModule,
    FindJobRoutingModule
  ]
})
export class FindJobModule { }
