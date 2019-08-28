import { Injectable } from '@angular/core';
import { Item } from './entities/item.entity';
import { Product } from './product';
import { productList } from './product-list';
import { ProductService } from './product.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[];
  private result: productList;
  private subject = new Subject<any>();

  constructor(
    private productService: ProductService
  ) { 
    this.productService.findSupermarketProducts().subscribe({
			next: x => this.result = x,
			complete: () => this.products = this.result.products
		});
  }

  updateShoppingCartCount(){
    let cartCount = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			cartCount += item.quantity;
    }
    this.subject.next({ cartCount:  cartCount});
  }

  getShoppingCartCount(): Observable<any>{
    return this.subject.asObservable();
  }

  addItemToCart (id: string){
      var item: Item = {
        product: this.findProduct(id),
        quantity: 1
      };
      if (localStorage.getItem('cart') == null) {
        let cart: any = [];
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for (var i = 0; i < cart.length; i++) {
          let item: Item = JSON.parse(cart[i]);
          if (item.product.id == id) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let item: Item = JSON.parse(cart[index]);
          item.quantity += 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
  }
  findProduct(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
