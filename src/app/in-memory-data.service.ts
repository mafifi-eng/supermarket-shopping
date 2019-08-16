import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Supermarket } from './supermarket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const supermarkets = [
      { id: 1, name: 'Walmart' },
      { id: 2, name: 'Safeway' },
      { id: 3, name: 'Giant' }
    ];
    return {supermarkets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(supermarkets: Supermarket[]): number {
    return supermarkets.length > 0 ? Math.max(...supermarkets.map(supermarket => supermarket.id)) + 1 : 11;
  }
}