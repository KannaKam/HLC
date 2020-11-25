import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalWindowPage } from './modal-window.page';

const routes: Routes = [
  {
    path: '',
    component: ModalWindowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalWindowPageRoutingModule {}
