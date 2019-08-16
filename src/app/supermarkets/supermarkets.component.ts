import { Component, OnInit } from '@angular/core';
import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.css']
})
export class SupermarketsComponent implements OnInit {

  supermarkets: Supermarket[];
  selectedSupermarket: Supermarket;

  constructor(private supermarketService: SupermarketService) { }

  ngOnInit() {
    this.getSupermarket();
  }

  getSupermarket(): void {
    this.supermarketService.getSupermarkets()
    .subscribe(supermarkets => this.supermarkets = supermarkets);;
  }

  onSelect(supermarket: Supermarket): void {
    this.selectedSupermarket = supermarket;
  }

}
