import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';

import { ActionSheetPage } from './action-sheet.page';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { ComponenteModule } from 'src/app/componentes/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponenteModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
