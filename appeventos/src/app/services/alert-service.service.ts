import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(public alertController: AlertController) { }

  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
