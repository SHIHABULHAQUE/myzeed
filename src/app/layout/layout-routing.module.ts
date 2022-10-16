import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'top-exam',
        loadChildren: () => import('../top-exam/top-exam.module').then(m=>m.TopExamModule)
      }
     ,
     {
      path:'find-job',
      loadChildren:() => import('../find-job/find-job.module').then(m => m.FindJobModule)

     },
     {
      path:'appoinment',
      loadChildren:() =>import('../appoinment/appoinment.module').then(m => m.AppoinmentModule)
     }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
