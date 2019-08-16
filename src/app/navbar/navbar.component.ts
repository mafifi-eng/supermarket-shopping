import { Component, OnInit } from '@angular/core';
import { Supermarket }         from '../supermarket';
import { SupermarketService }  from '../supermarket.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  supermarket: Supermarket;

  constructor(
    private route: ActivatedRoute,
    private supermarketService: SupermarketService,
  ) { }

  ngOnInit() {
    this.getSupermarket();
  }
  getSupermarket() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supermarketService.getSupermarket(id)
      .subscribe(supermarket => this.supermarket = supermarket);
  }

}
