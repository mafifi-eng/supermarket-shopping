import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketCarouselComponent } from './supermarket-carousel.component';

describe('SupermarketCarouselComponent', () => {
  let component: SupermarketCarouselComponent;
  let fixture: ComponentFixture<SupermarketCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
