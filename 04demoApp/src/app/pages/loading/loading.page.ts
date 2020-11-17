import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MensajesService } from '../../services/mensajes.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  public miLoading:HTMLIonLoadingElement;
  constructor(public loadingController: LoadingController,
              private _mensajeService:MensajesService,
              private _usuariosService:UsuariosService) { }

  async presentLoading(){
    this.miLoading = await this.loadingController.create({
      message:'Cargando...',
    });
    await this.miLoading.present();
  }

  onClick(){
    this.presentLoading();
    setTimeout(()=>{
      this.miLoading.dismiss();
    },2000);
  }
  async onClick2(){
    this._mensajeService.muestraLoading("Cargando");
    let data = await this._usuariosService.getUsuarios(1);
    data = await this._usuariosService.getUsuarios(1);
    data = await this._usuariosService.getUsuarios(1);
    this._mensajeService.ocultaLoading();
  }
  
  ngOnInit() {
  }

}
