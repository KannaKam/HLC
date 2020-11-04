import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: any = [
    {
      nombre: "Página inicial",
      ruta: "inicio"
    },
    {

      nombre: "Noticias",
      ruta: "noticias"

    },
    {
      nombre: "Sugerencias",
      ruta: "sugerencias"
    },
    {
      nombre: "Articulos",
      ruta: "articulos"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
