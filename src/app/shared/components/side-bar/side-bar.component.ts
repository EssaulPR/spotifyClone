import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  /* Otra forma de guardar en arrays
    linksMenu:Array<any> = [
    {
      name: "Home",
      icon: "uil-home"
    },
    {
      name: "Buscar",
      icon: "uil-search"
    }
  ];
  */

 //Se crea una Json con variables
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>,
    customOptions: Array<any>
  } = {
    defaultOptions: [],
    accessLink: [],
    customOptions: []
  };
  //Ciclo for con 8 vidas o algo asi...
  ngOnInit(): void {
    //Llamamos a nuestro Json, entrando a sus variables para introducirles sus datos
    this.mainMenu.defaultOptions = [
      {
        name: "Home",
        icon: "uil-estate",
        router: ['/']
      },
      {
        name: "Search",
        icon: "uil-search",
        router: ['/']
      },
      {
        name: "Your Library",
        icon: "uil-chart",
        router: ['/']
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]
    this.mainMenu.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }
}
