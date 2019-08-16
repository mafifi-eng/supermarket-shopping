import { Component, OnInit } from '@angular/core';
import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  supermarkets: Supermarket[] = [];

  constructor(private supermarketService: SupermarketService) { }

  ngOnInit() {
    this.getSupermarkets();
  }

  getSupermarkets(): void {
    this.supermarketService.getSupermarkets()
      .subscribe(supermarkets => this.supermarkets = supermarkets.slice(1, 5));
  }
}