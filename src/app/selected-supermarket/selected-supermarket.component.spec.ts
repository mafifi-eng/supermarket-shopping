import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSupermarketComponent } from './selected-supermarket.component';

describe('SelectedSupermarketComponent', () => {
  let component: SelectedSupermarketComponent;
  let fixture: ComponentFixture<SelectedSupermarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedSupermarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
