import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    SharedModule
  ]
})
export class FavoriteModule { }
