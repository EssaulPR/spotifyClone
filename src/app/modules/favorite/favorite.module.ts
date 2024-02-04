import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';


@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule { }
