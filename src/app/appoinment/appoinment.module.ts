import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppoinmentRoutingModule } from './appoinment-routing.module';
import { AppoinmentComponent } from './appoinment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppoinmentComponent,
  ],
  imports: [
    CommonModule,
    AppoinmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppoinmentModule { }
