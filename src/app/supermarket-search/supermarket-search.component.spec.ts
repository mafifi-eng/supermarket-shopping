import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketSearchComponent } from './supermarket-search.component';

describe('SupermarketSearchComponent', () => {
  let component: SupermarketSearchComponent;
  let fixture: ComponentFixture<SupermarketSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
