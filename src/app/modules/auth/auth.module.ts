import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthePageComponent } from './pages/authe-page/authe-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AuthePageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
