import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job.component';
import { FindJobModule } from './find-job.module';

const routes: Routes = [
  {
    path:'',
    component:FindJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindJobRoutingModule { }
