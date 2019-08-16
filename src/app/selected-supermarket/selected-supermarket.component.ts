import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Supermarket }         from '../supermarket';
import { SupermarketService }  from '../supermarket.service';

@Component({
  selector: 'app-selected-supermarket',
  templateUrl: './selected-supermarket.component.html',
  styleUrls: ['./selected-supermarket.component.css']
})
export class SelectedSupermarketComponent implements OnInit {

  supermarket: Supermarket;

  constructor(
    private route: ActivatedRoute,
    private supermarketService: SupermarketService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSupermarket();
  }

  getSupermarket(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supermarketService.getSupermarket(id)
      .subscribe(supermarket => this.supermarket = supermarket);
  }

  goBack(): void {
    this.location.back();
  }
}
