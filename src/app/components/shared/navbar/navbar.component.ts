import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit() {
  }

  buscarHeroe(heroe: string) {
    this.route.navigate( ['/resultado',heroe] );
  }

}
