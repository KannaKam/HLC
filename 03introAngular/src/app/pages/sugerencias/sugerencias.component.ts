import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  constructor() { }
  public mostrar:boolean;
  ngOnInit(): void {
    this.mostrar=true;
  }

}
