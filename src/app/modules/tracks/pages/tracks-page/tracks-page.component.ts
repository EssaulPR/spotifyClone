import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as Data from '@data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  options:Array<any> = [
    {
      titulo1 : 'Lo mejor de la musica',
      big:'big',
      titulo2 : 'Lo mejor de la musica',
      small:'small'
    }
  ]
  mockDataTrackList:Array<TrackModel> =[]
  ngOnInit(): void {
    const {data}:any = (Data as any).default
    this.mockDataTrackList = data
  }
}
