import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './pages/homepages/homepages.component';

const routes: Routes = [
  {
    path: '',
    component:HomepagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
