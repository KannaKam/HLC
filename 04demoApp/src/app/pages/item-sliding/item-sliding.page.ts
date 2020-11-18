import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {

  @ViewChild('miLista') miLista:IonList;
  constructor() { }
  public lista:string[] = ["Funciona", "Por", "Favor"];
  ngOnInit() {
  }

  favorite(nombre:string){
    console.log(nombre);
    this.miLista.closeSlidingItems();
  }
  share(nombre:string){
    console.log(nombre);
    this.miLista.closeSlidingItems();
  }
}
