import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent
  ]
})
export class SharedModule { }
