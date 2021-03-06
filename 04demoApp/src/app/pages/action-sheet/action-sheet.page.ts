import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }



  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      backdropDismiss :false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        cssClass: 'rojo',
        icon: 'trash',
        handler: () => {
          console.log('Deleteertyertyrty clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
