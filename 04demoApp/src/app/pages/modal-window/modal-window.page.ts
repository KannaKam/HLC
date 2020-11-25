import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.page.html',
  styleUrls: ['./modal-window.page.scss'],
})
export class ModalWindowPage implements OnInit {

  constructor(private modalController:ModalController) { }
  @Input()dato:any;
  ngOnInit() {
  }

  cancelar(){
    this.modalController.dismiss();
  }
  modificar(){
    this.modalController.dismiss(this.dato);
  }
}
