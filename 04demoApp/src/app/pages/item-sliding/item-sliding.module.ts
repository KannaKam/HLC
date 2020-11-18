import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSlidingPageRoutingModule } from './item-sliding-routing.module';

import { ItemSlidingPage } from './item-sliding.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSlidingPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ItemSlidingPage]
})
export class ItemSlidingPageModule {}
