import { Component, OnInit, Input } from '@angular/core';
import { Supermarket } from '../supermarket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supermarket-detail',
  templateUrl: './supermarket-detail.component.html',
  styleUrls: ['./supermarket-detail.component.css']
})
export class SupermarketDetailComponent implements OnInit {

  @Input() supermarket: Supermarket;

  constructor(
    private router: Router) {}

  ngOnInit() {
   
  }

  goSupermarket(supermarket: Supermarket): void {
    this.router.navigate(['/supermarket/' + supermarket.id]);
  }

}
