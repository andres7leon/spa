import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  
  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRouter:ActivatedRoute,
               private _heroesServices:HeroesServices
    ) {
      this.termino = '';
     }

  ngOnInit() {
    
    this.activatedRouter.params.subscribe( params => {
      
      this.termino = params['termino'];
      this.heroes =  this._heroesServices.buscarHeroes(params['termino']);
      
    })

  }

}
