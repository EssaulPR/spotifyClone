import { Component } from '@angular/core';

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
  mockDataTrackList:Array<any> = [
    {
      name: 'BadBunny1'
    },
    {
      name: 'BadBunny2'
    },
    {
      name: 'BadBunny3'
    }
  ]
}
