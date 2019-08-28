import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketBestSellersComponent } from './supermarket-best-sellers.component';

describe('SupermarketBestSellersComponent', () => {
  let component: SupermarketBestSellersComponent;
  let fixture: ComponentFixture<SupermarketBestSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketBestSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
