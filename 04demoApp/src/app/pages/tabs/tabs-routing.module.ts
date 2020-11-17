import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/pagina1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'pagina1',
        loadChildren: () =>import('../pagina1/pagina1.module').then(m => m.Pagina1PageModule)
      },
      {
        path: 'pagina2',
        loadChildren: () =>import('../pagina2/pagina2.module').then(m => m.Pagina2PageModule)
      },
      {
        path: 'pagina3',
        loadChildren: () =>import('../pagina3/pagina3.module').then(m => m.Pagina3PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
