import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes=[


  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'noticias',
    loadChildren:()=>import('./pages/noticias/noticias.module').then(miModulo=>miModulo.NoticiasModule)
  },
  {
    path:'sugerencias',
    component: SugerenciasComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'articulos',
    component: ArticulosComponent
  },
  {
    path:'error',
    component: ErrorComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
