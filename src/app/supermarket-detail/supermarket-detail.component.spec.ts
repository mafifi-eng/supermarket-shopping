import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketDetailComponent } from './supermarket-detail.component';

describe('SupermarketDetailComponent', () => {
  let component: SupermarketDetailComponent;
  let fixture: ComponentFixture<SupermarketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
