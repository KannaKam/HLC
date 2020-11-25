import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDemoPageRoutingModule } from './modal-demo-routing.module';

import { ModalDemoPage } from './modal-demo.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDemoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ModalDemoPage]
})
export class ModalDemoPageModule {}
