import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
