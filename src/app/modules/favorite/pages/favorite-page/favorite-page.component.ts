import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent {
  options:Array<any> =[
    {
      listaReproduccion: 'Lista de reproducciones',
      primerTitulo: 'Canciones que te gustan',
      subTitulo: 'Essaul'
    }
  ]
}
