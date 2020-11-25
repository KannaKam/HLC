import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalWindowPage } from '../modal-window/modal-window.page';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.page.html',
  styleUrls: ['./modal-demo.page.scss'],
})
export class ModalDemoPage implements OnInit {

  constructor(private modalController:ModalController) { }
  public usuario:any = {
    nombre: "Pedro",
    apellido: "Picapiedra"
  }
  ngOnInit() {
  }

  async mostarModal(){
      const modal = await this.modalController.create({
        component: ModalWindowPage,
        componentProps:{
          dato:{ 
          nombre: this.usuario.nombre,
          apellido: this.usuario.apellido
        }
      }
      })
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if(data){
        this.usuario = data;
      }
  }

}
