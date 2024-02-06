import { Router } from '@angular/router';
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
  constructor(private router:Router) {

  }
  //Ciclo for con 8 vidas o algo asi...
  ngOnInit(): void {
    //Llamamos a nuestro Json, entrando a sus variables para introducirles sus datos
    this.mainMenu.defaultOptions = [
      {
        name: "Home",
        icon: "uil-estate",
        router: ['tracks']
      },
      {
        name: "Search",
        icon: "uil-search",
        router: ['/home']
      },
      {
        name: "Your Library",
        icon: "uil-chart",
        router: ['/home']
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
        router: ['']
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
        router: ['']
      }
    ]
    this.mainMenu.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/home'],
        query: {hola:'mundo1'}
      },
      {
        name: 'Mi lista º2',
        router: ['/home'],
        query: {hola:'mundo2'}
      },
      {
        name: 'Mi lista º3',
        router: ['/home'],
        query: {hola:'mundo3'}
      },
      {
        name: 'Mi lista º4',
        router: ['/home'],
        query: {hola:'mundo4'}
      }
    ]
  }
  //para esto es cuando sabemos bien a donde mandar al usuario
  goTo($event: any): void {
    this.router.navigate(['home','favorite'],{
      queryParams:{
        key1:'value1',
        key2:'value2',
        key3:'value3'

      }
    })
  }
}
