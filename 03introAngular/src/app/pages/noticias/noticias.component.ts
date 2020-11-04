
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  
  constructor(private _noticiasService:NewsService, private router:Router) { }
  public articulos: Article[];
  async ngOnInit() {
    
    const datos = await this._noticiasService.getNoticias();
    if(datos.status=="ok"){
      this.articulos=datos.articles;
      
    }else{
      this.router.navigate(['/error']);
    }
    
  }

}
