import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Supermarket } from '../supermarket';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-supermarket-search',
  templateUrl: './supermarket-search.component.html',
  styleUrls: [ './supermarket-search.component.css' ]
})
export class SupermarketSearchComponent implements OnInit {
  supermarkets$: Observable<Supermarket[]>;
  private searchTerms = new Subject<string>();

  constructor(private supermarketService: SupermarketService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.supermarkets$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.supermarketService.searchSupermarkets(term)),
    );
  }
}