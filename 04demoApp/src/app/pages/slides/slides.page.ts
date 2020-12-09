import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private _usuariosService: UsuariosService,
              private modalController:ModalController) { }

  public usuarios: Usuario[] = [];
  async ngOnInit() {
    const datos = await this._usuariosService.getUsuarios(1);
    this.usuarios.unshift(...datos.data);
  }

}
