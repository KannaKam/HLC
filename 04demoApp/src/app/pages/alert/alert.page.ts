import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Boton } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
  export class AlertPage implements OnInit {

    botones: Boton[] = [
      {
        nombre: "Informativo",
        numero: 1
      },
      {
        nombre: "Multiples botones",
        numero: 2
      },
      {
        nombre: "Confirmar",
        numero: 3
      },
      {
        nombre: "Prompt",
        numero: 4
      },
      {
        nombre: "Radio",
        numero: 5
      },
      {
        nombre: "Checkbox",
        numero: 6
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
        subHeader: 'Mensaje',
        message: 'Never',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
    async presentAlertMultipleButtons() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Multiples Botones',
        subHeader: 'Subtitle',
        message: 'Gonna',
        buttons: ['Give', 'You', 'Up']
      });
  
      await alert.present();
    }
  
    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Never',
        message: 'Gonna',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }
  
    async presentAlertPrompt() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Ya me ha dao pereza seguir',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            placeholder: 'Placeholder 1'
          },
          {
            name: 'name2',
            type: 'text',
            id: 'name2-id',
            value: 'hello',
            placeholder: 'Placeholder 2'
          },
          // multiline input.
          {
            name: 'paragraph',
            id: 'paragraph',
            type: 'textarea',
            placeholder: 'Placeholder 3'
          },
          {
            name: 'name3',
            value: 'http://ionicframework.com',
            type: 'url',
            placeholder: 'Favorite site ever'
          },
          // input date with min & max
          {
            name: 'name4',
            type: 'date',
            min: '2017-03-01',
            max: '2018-01-12'
          },
          // input date without min nor max
          {
            name: 'name5',
            type: 'date'
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
          },
          {
            name: 'name7',
            type: 'number'
          },
          {
            name: 'name8',
            type: 'password',
            placeholder: 'Advanced Attributes',
            cssClass: 'specialClass',
            attributes: {
              maxlength: 4,
              inputmode: 'decimal'
            }
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
  
    async presentAlertRadio() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Radio',
        inputs: [
          {
            name: 'radio1',
            type: 'radio',
            label: 'Radio 1',
            value: 'value1',
            checked: true
          },
          {
            name: 'radio2',
            type: 'radio',
            label: 'Radio 2',
            value: 'value2'
          },
          {
            name: 'radio3',
            type: 'radio',
            label: 'Radio 3',
            value: 'value3'
          },
          {
            name: 'radio4',
            type: 'radio',
            label: 'Radio 4',
            value: 'value4'
          },
          {
            name: 'radio5',
            type: 'radio',
            label: 'Radio 5',
            value: 'value5'
          },
          {
            name: 'radio6',
            type: 'radio',
            label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
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
        cssClass: 'my-custom-class',
        header: 'Checkbox',
        inputs: [
          {
            name: 'checkbox1',
            type: 'checkbox',
            label: 'Checkbox 1',
            value: 'value1',
            checked: true
          },
  
          {
            name: 'checkbox2',
            type: 'checkbox',
            label: 'Checkbox 2',
            value: 'value2'
          },
  
          {
            name: 'checkbox3',
            type: 'checkbox',
            label: 'Checkbox 3',
            value: 'value3'
          },
  
          {
            name: 'checkbox4',
            type: 'checkbox',
            label: 'Checkbox 4',
            value: 'value4'
          },
  
          {
            name: 'checkbox5',
            type: 'checkbox',
            label: 'Checkbox 5',
            value: 'value5'
          },
  
          {
            name: 'checkbox6',
            type: 'checkbox',
            label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
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
}
