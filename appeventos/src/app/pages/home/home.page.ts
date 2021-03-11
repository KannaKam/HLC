import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, ActionSheetController } from '@ionic/angular';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { EventService } from 'src/app/services/events.service';
import { UsersService } from '../../services/users.service';
import { User, Event } from '../../interfaces/Response';

const dateFormat = { year: 'numeric', month: 'numeric', day: 'numeric' }
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private alertService: AlertServiceService, private userService: UsersService, private router: Router, private eventService: EventService, private toastController: ToastController, private alertController: AlertController, private actionSheetController: ActionSheetController) { }

  public data;
  public eventsList: Event[] = [];
  user:User;

  ionViewWillEnter() {
    this.findEvents();
    this.findUser();
  }

  logout(){
    this.userService.clearStorage();
    this.router.navigate(["login"]);
  }

  findEvents(){
    this.eventService.findEvents().then(async resp => {
      if (resp.status == "ok") {
        this.eventsList = resp.events
      } else {
        this.presentToast("No se han podido traer los eventos");
      }
    })
  }

  findUser(){
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  filterEvents(){
    this.eventsList = this.eventsList.filter(event => event.userID === this.user._id)
    this.alertService.presentAlert("To show all events again, drag down.");
    this.alertService.presentAlert("Showing the events you have created.");
  }

  async createEvent() {
    const date = new Date()

    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Create new event',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Event name',
        },
        {
          name: 'date',
          type: 'date',
          min: date.toLocaleDateString('en-EN', dateFormat),
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create event',
          handler: async (data) => {
            if (data.name.length == 0 || data.date.length == 0) {
              this.presentToast("Required fields.");
            } else {
              const event: Event = {
                name: data.name,
                date: new Date(data.date),
              }
              this.eventService.createEvent(event).then(resp => {
                if (resp.status === "ok") {
                  this.presentToast("Event created succesfully");
                  this.findEvents();
                } else {
                  this.presentToast("Error while creating the event");
                }
              })
            }
          }
        }
      ]
    })
    alert.present();
  };

  
  updateEvents(event: Event) {
    this.eventService.updateEvents(event).then(async resp => {
      if (resp.status === "ok") {
        this.presentToast("Events updated");
        this.findEvents()
      } else {
        this.presentToast("Unexpected error has occurred");
        this.findEvents();
      };
    });
  }

  async editEvent(event: Event) {
    const tempEvent: Event = JSON.parse(JSON.stringify(event))

    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Edit current event',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: tempEvent.name
        },
        {
          name: 'date',
          type: 'date',
          min: new Date().toLocaleDateString('fr-CA', dateFormat)
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Edit event',
          handler: async (data) => {
            if (data.name.length == 0 || data.date.length == 0) {
              this.presentToast("Required fields");
            } else {
              this.presentToast("Event edited succesfully");
              tempEvent.name = data.nombre
              tempEvent.date = new Date(data.date)
              this.updateEvents(tempEvent);
            };
          }
        }
      ]
    })
    alert.present();
  };

  joinEvent(event: Event) {
    const tempEvent: Event = JSON.parse(JSON.stringify(event))

    if (tempEvent.participants.length < 4) {
      const index = tempEvent.participants.findIndex(name => name === this.user.username);
      if (index == -1) {
        tempEvent.participants.push(this.user.username);
        this.updateEvents(tempEvent);
        this.presentToast("Joined succesfully");
      } else if (index > -1) {
        this.presentToast("Alredy joined");
      };
    } else {
      this.presentToast("Event is full");
    }
  };

  async leaveEvent(event: Event) {

    const tempEvent: Event = JSON.parse(JSON.stringify(event))
    const index = tempEvent.participants.findIndex(name => name === this.user.username);
    if (index > -1) {
      const alert = await this.alertController.create({
        backdropDismiss: true,
        header: 'Leave event',
        message: 'Are you sure you want to leave the event?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'I'+"'m sure",
            handler: () => {
              tempEvent.participants.splice(index, 1);
              this.updateEvents(tempEvent);
              this.presentToast("You left the event");
            }
          }
        ]
      })
      alert.present()
    } else {
      this.presentToast("You are not a participant of the event");
    }
  };

  async eventOptions(event: Event) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Join',
          icon: 'add-circle-outline',
          handler: () => {
            this.joinEvent(event)
          }
        }, {
          text: 'Leave',
          icon: 'remove-circle-outline',
          handler: () => {
            this.leaveEvent(event)
          }
        },
        {
          text: 'Close',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }

  async globalOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Create event',
          icon: 'add-circle-outline',
          handler: () => {
            this.createEvent();
          }
        }, {
          text: 'Show my events',
          icon: 'filter-circle-outline',
          handler: () => {
            this.filterEvents();
          }
        }, {
          text: 'Logout',
          icon: 'exit',
          cssClass:"logoutIcon",
          role:"destructive",
          handler: () => {
            this.logout();
          }
        },
        {
          text: 'Close',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }
  doRefresh(event) {
    setTimeout(() => {
      this.findEvents();
      event.target.complete();
    },1500);
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvents(event);
    this.alertService.presentAlert("Event deleted");
    this.findEvents();
  }

  async selfEventsOptions(event: Event) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.editEvent(event);
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          handler: () => {
            this.deleteEvent(event);
          }
        },
        {
          text: 'Close',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500
    });
    toast.present();
  }

}
