import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { ComponenteModule } from '../../componentes/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
    ComponenteModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
