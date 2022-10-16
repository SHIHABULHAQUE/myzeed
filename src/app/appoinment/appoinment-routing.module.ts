import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentComponent } from './appoinment.component';

const routes: Routes = [
  {
    path:'',
    component:AppoinmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppoinmentRoutingModule { }
