import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Supermarket } from './supermarket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const supermarkets = [
      { id: 1, name: 'Walmart', icon: 'assets/images/walmart-2.svg' },
      { id: 2, name: 'Safeway' },
      { id: 3, name: 'Giant' }
    ];
    const supermarketsCarouselImg = [
      { id: 1, img: ['assets/images/k2-_135f648a-f147-4458-b041-7ff0215c08e1.v1.jpg', 'assets/images/k2-_6f61f83d-79db-4339-966f-8eb5c1ff1769.v1.jpg', 'assets/images/k2-_2e595f71-ee63-4ae1-bf99-9692eed1eb5a.v1.jpg' ]},
      { id: 2, img:[ 'Safeway' ]},
      { id: 3, img: ['Giant'] }
    ];
    const productPromotions = [
      {id: 1, products:[
        { id: 'p01', description: 'Green Bell Pepper, each', price: '0.80', photo: 'f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg' },
        { id: 'p02', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
        { id: 'p03', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' },
        { id: 'p04', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
        { id: 'p05', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' }
    ]
    },
    {id: 2, products:[
      { id: 'p01', description: 'Green Bell Pepper, each', price: '0.80', photo: 'f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg' },
      { id: 'p02', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
      { id: 'p03', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' },
      { id: 'p04', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
      { id: 'p05', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' }
  ]
  },
  {id: 3, products:[
    { id: 'p01', description: 'Green Bell Pepper, each', price: '0.80', photo: 'f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg' },
    { id: 'p02', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
    { id: 'p03', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' },
    { id: 'p04', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
    { id: 'p05', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' }
  ]
  }
    ]
    const supermarketProducts = [
      {id: 1, products:[
        { id: 'p01', description: 'Green Bell Pepper, each', price: '0.80', photo: 'f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg' },
        { id: 'p02', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
        { id: 'p03', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' },
        { id: 'p04', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
        { id: 'p05', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' }
    ]
    },
    {id: 2, products:[
      { id: 'p01', description: 'Green Bell Pepper, each', price: '0.80', photo: 'f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg' },
      { id: 'p02', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
      { id: 'p03', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' },
      { id: 'p04', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
      { id: 'p05', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' }
  ]
  },
  {id: 3, products:[
    { id: 'p01', description: 'Green Bell Pepper, each', price: '0.80', photo: 'f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg' },
    { id: 'p02', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
    { id: 'p03', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' },
    { id: 'p04', description: 'Lunchables Lunch Combinations Turkey & American Cracker Stackers, 3.4 oz Package', price: '1.98', photo: 'f663eb5e-32cb-460b-87af-7af684fb25f3_4.351c24904cbd6c2686157fd8bea902fd.jpeg' },
    { id: 'p05', description: 'Great Value 2% Reduced-Fat Milk, 1 Gallon, 128 Fl. Oz.', price: '2.44', photo: 'cbcc26fb-af25-4672-bfb8-cb156cf1dadf_2.b93305e90bf7f66b9ab5f36f25652660.jpeg' }
  ]
  }
    ]

    return {supermarkets, supermarketsCarouselImg, productPromotions, supermarketProducts};
  }

  // Overrides the genId method to ensure that a supermarkets always has an id.
  // If the supermarkets array is empty,
  // the method below returns the initial number.
  // if the supermarkets array is not empty, the method below returns the highest
  // supermarkets id + 1.
  genId(supermarkets: Supermarket[]): number {
    return supermarkets.length > 0 ? Math.max(...supermarkets.map(supermarket => supermarket.id)) + 1 : 11;
  }
}