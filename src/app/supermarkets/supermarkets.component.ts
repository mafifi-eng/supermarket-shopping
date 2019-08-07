import { Component, OnInit } from '@angular/core';
import { Supermarket } from '../supermarket';
import { SUPERMARKETS } from '../mock-supermarkets';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.css']
})
export class SupermarketsComponent implements OnInit {

  supermarkets = SUPERMARKETS;
  selectedSupermarket: Supermarket;

  constructor() { }

  ngOnInit() {
  }

  onSelect(supermarket: Supermarket): void {
    this.selectedSupermarket = supermarket;
  }

}
