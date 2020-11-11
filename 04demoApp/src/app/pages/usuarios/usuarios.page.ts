import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private _mensajeService:MensajesService) { }

  ngOnInit() {
  }
  onClick(){
    this._mensajeService.muestraMensaje("Usuarios cargados");
  }

  refresca(ev){
    setTimeout(()=>{
      ev.target.complete();
    }, 1500);
  }

}
