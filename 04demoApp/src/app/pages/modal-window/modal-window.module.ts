import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalWindowPageRoutingModule } from './modal-window-routing.module';

import { ModalWindowPage } from './modal-window.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalWindowPageRoutingModule
  ],
  declarations: [ModalWindowPage]
})
export class ModalWindowPageModule {}
