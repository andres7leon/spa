import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  
  heroe: any = {};

  constructor( private activateRouter: ActivatedRoute,
               private _heroesService: HeroesServices
    ) {
  
    this.activateRouter.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe( params['id']);
        
      console.log(this.heroe)

    } )

  }

  ngOnInit() {
  }

}
