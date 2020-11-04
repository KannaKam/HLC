import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {



  constructor() { }

  public componente: Componente[] = [
    {
      nombre: "Action-sheet",
      ruta: "/action-sheet",
      icono: "trash",
      color: "primary"
    },
    {
      nombre: "Alert",
      ruta: "/alert",
      icono: "add",
      color: "success"
    }
  ];
  ngOnInit() {
  }

}
