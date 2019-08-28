import { Injectable } from '@angular/core';
import { SupermarketPromotions } from './supermarketPromotions';
import { Product } from './product';
import { productList } from './product-list';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
  })
  
export class ProductService {

    private products: Product[];
    private promotionsUrl = 'api/productPromotions';
    private supermarketProductUrl = 'api/supermarketProducts';

    constructor(private http: HttpClient,
      private messageService: MessageService
      ) {
    }

    findSupermarketProducts (): Observable<productList> {
      let supermarketId: string = localStorage.getItem('supermarketId');
      const url = `${this.supermarketProductUrl}/${supermarketId}`;
      this.log(url);
      return this.http.get<productList>(url).pipe(
        catchError(this.handleError<productList>(`findSupermarketProduct id=${supermarketId}`))
      )
    }

    getSupermarketPromotions(id: string): Observable<SupermarketPromotions> {
        const url = `${this.promotionsUrl}/${id}`;
        return this.http.get<SupermarketPromotions>(url).pipe(
          catchError(this.handleError<SupermarketPromotions>(`getSupermarketPromotions id=${id}`))
        );
      }

      /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`${message}`);
}
  
}