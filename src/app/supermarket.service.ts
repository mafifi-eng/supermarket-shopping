import { Injectable } from '@angular/core';
import { Supermarket } from './supermarket';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CarouselImgs } from './carousel-img';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {

  private supermarketsUrl = 'api/supermarkets';  // URL to web api
  private supermarketsCarouselImg = 'api/supermarketsCarouselImg';
  private supermarketIcon = 'api/supermarketIcon';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSupermarkets(): Observable <Supermarket[]> {
    this.messageService.add('SupermarketService: fetched supermarkets');
    return this.http.get<Supermarket[]>(this.supermarketsUrl)
    .pipe(
      tap(_ => this.log('fetched supermarkets')),
      catchError(this.handleError<Supermarket[]>('getSupermarkets', []))
    );
  }

  getSupermarket(id: number): Observable<Supermarket> {
    const url = `${this.supermarketsUrl}/${id}`;
    return this.http.get<Supermarket>(url).pipe(
      tap(_ => this.log(`fetched Supermarket id=${id}`)),
      catchError(this.handleError<Supermarket>(`getSupermarket id=${id}`))
    );
  }

  getSupermarketCarouselImg(id: number): Observable<CarouselImgs> {
    const url = `${this.supermarketsCarouselImg}/${id}`;
    return this.http.get<CarouselImgs>(url).pipe(
      tap(_ => this.log(``)),
      catchError(this.handleError<CarouselImgs>(`getSupermarketCarouselImg id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`${message}`);
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

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/* GET Supermarkets whose name contains search term */
searchSupermarkets(term: string): Observable<Supermarket[]> {
  if (!term.trim()) {
    // if not search term, return empty Supermarket array.
    return of([]);
  }
  return this.http.get<Supermarket[]>(`${this.supermarketsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found Supermarkets matching "${term}"`)),
    catchError(this.handleError<Supermarket[]>('searchSupermarkets', []))
  );
}

}
