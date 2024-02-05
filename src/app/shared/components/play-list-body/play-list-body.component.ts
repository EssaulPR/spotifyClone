import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as Data from '@data/tracks.json'
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks:TrackModel[] = []
  optionsSort: {
    property:string | null,
    order:string
  } = {
      property:null,
      order:'asc'
    }

  ngOnInit(): void {
    const {data}:any = (Data as any).default
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionsSort
    this.optionsSort = {
      property:property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
