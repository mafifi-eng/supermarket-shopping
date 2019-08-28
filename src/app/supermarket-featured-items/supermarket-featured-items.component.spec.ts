import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketFeaturedItemsComponent } from './supermarket-featured-items.component';

describe('SupermarketFeaturedItemsComponent', () => {
  let component: SupermarketFeaturedItemsComponent;
  let fixture: ComponentFixture<SupermarketFeaturedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketFeaturedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketFeaturedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
