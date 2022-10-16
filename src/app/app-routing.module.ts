import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { FindJobComponent } from './find-job/find-job.component';
import { HeaderComponent } from './header/header.component';
import { TopExamComponent } from './top-exam/top-exam.component';

const routes: Routes = [

  {
    
    path:'Dasboard',
    loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'Dasboard/appoinment'
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
