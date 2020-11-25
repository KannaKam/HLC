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

  favorite(id:number){
    console.log(this.lista[id]);
    this.miLista.closeSlidingItems();
  }
  share(id:number){
    console.log(this.lista[id]);
    this.miLista.closeSlidingItems();
  }
}
