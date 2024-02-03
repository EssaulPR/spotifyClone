import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomepagesComponent } from './pages/homepages/homepages.component';

<<<<<<< HEAD

=======
>>>>>>> 66bf700fa61e8825abcdd454896154f828f6337b
@NgModule({
  declarations: [
    HomepagesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
