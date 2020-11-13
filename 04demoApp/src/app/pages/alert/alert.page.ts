import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Boton } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  botones: Boton[] = [
    {
      nombre: "Info",
      numero: 1,
      color: "danger"
    },
    {
      nombre: "Multiple",
      numero: 2,
      color: "secondary"
    },
    {
      nombre: "Confirm",
      numero: 3,
      color: "tertiary"
    },
    {
      nombre: "Prompt",
      numero: 4,
      color: "success"
    },
    {
      nombre: "Radio",
      numero: 5,
      color: "warning"
    },
    {
      nombre: "Checkbox",
      numero: 6,
      color: "dark"
    },

  ]

  constructor(public alertController: AlertController) { }
  ngOnInit() {
  }

  onClick(numero) {
    switch (numero) {
      case 1:
        this.presentAlert();
        break;
      case 2:
        this.presentAlertMultipleButtons();
        break;
      case 3:
        this.presentAlertConfirm();
        break;
      case 4:
        this.presentAlertPrompt();
        break;
      case 5:
        this.presentAlertRadio();
        break;
      case 6:
        this.presentAlertCheckbox();
        break;

    }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Never',
      buttons: ['Gonna']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Multiples Botones',
      message: 'Give',
      buttons: ['You', 'Up', 'Never']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirma',
      message: 'Gonna',
      buttons: [
        {
          text: 'Let',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Let');
          }
        }, {
          text: 'You',
          handler: () => {
            console.log('You');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Formulario',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        
        // multiline input.
        {
          name: 'Apellido',
          type: 'text',
          placeholder: 'Apellido'
        },
        {
          name: 'Fecha de Nacimiento',
          type: 'date'
        }
        
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'You',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Down',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Never',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Gonna',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Run',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Around',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'And',
          type: 'checkbox',
          label: 'And',
          value: 'And',
          checked: true
        },

        {
          name: 'Desert',
          type: 'checkbox',
          label: 'Desert',
          value: 'Desert'
        },

        {
          name: 'You',
          type: 'checkbox',
          label: 'You',
          value: 'You'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
