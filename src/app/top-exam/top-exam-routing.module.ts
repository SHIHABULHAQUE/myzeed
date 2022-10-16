import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopExamComponent } from './top-exam.component';
import { TopExamModule } from './top-exam.module';

const routes: Routes = [
  {
    path:'',
    component:TopExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopExamRoutingModule { }
