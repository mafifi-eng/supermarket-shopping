import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketPromotionsComponent } from './supermarket-promotions.component';

describe('SupermarketPromotionsComponent', () => {
  let component: SupermarketPromotionsComponent;
  let fixture: ComponentFixture<SupermarketPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
