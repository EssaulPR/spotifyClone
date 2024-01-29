import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { MediaplayerModule } from './components/mediaplayer/mediaplayer.module';
import { HeaderuserModule } from './components/headeruser/headeruser.module';

@NgModule({
  declarations: [
    SidebarModule,
    MediaplayerModule,
    HeaderuserModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
