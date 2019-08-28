import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { SupermarketPromotions } from '../supermarketPromotions';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-supermarket-promotions',
  templateUrl: './supermarket-promotions.component.html',
  styleUrls: ['./supermarket-promotions.component.css']
})
export class SupermarketPromotionsComponent implements OnInit {

  private promotions: SupermarketPromotions;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getSupermarketPromotions();
  }

  getSupermarketPromotions(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getSupermarketPromotions(id)
      .subscribe(promo => this.promotions = promo);
  }

  addTOCart(id: string): void {
    this.cartService.addItemToCart(id);
    this.cartService.updateShoppingCartCount();
  }
}
