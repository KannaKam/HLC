import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor() { }
  public oculto: boolean = false;
  
  headers=["Articulo","Talla", "Precio"];

  public articulos: any = [
    {
      nombre: 'Camiseta',
      talla: 'XL',
      precio: 15.99,
      oculto: false,
    },
    {
      nombre: 'Jersey',
      talla: 'XL',
      precio: 23.99,
      oculto: false,
    },
    {
      nombre: 'Pantalon',
      talla: 'XL',
      precio: 19.99,
      oculto: false,
    },

  ]
ngOnInit(): void {
}

}




