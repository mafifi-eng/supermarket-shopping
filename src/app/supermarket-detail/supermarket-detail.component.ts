import { Component, OnInit, Input } from '@angular/core';
import { Supermarket } from '../supermarket';

@Component({
  selector: 'app-supermarket-detail',
  templateUrl: './supermarket-detail.component.html',
  styleUrls: ['./supermarket-detail.component.css']
})
export class SupermarketDetailComponent implements OnInit {

  @Input() supermarket: Supermarket;

  constructor() { }

  ngOnInit() {
  }

}
