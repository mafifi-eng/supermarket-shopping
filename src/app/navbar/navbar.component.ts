import { Component, OnInit } from '@angular/core';
import { Supermarket }         from '../supermarket';
import { SupermarketService }  from '../supermarket.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  supermarket: Supermarket;
  cartCount: string;

  constructor(
    private route: ActivatedRoute,
    private supermarketService: SupermarketService,
    private cartService: CartService
  ) {     }

  ngOnInit() {
    this.getSupermarket();
    this.getCartCount();    
  }
  getSupermarket() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supermarketService.getSupermarket(id)
      .subscribe(supermarket => this.supermarket = supermarket);
  }

  getCartCount(){
    this.cartService.getShoppingCartCount().subscribe(val => this.cartCount = val.cartCount);
    this.cartService.updateShoppingCartCount();
  }
}
