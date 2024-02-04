import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-play-list-header',
  templateUrl: './play-list-header.component.html',
  styleUrl: './play-list-header.component.css'
})
export class PlayListHeaderComponent {
  @Input() subTitulo: string = ''
  @Input() titulo: string = ''
  @Input() playList: string = ''
}
