import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SupermarketDetailComponent }  from './supermarket-detail/supermarket-detail.component';
import { SelectedSupermarketComponent } from './selected-supermarket/selected-supermarket.component'
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'supermarkets', component: SupermarketsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/supermarkets', pathMatch: 'full' },
  { path: 'detail/:id', component: SupermarketDetailComponent },
  { path: 'supermarket/:id', component: SelectedSupermarketComponent },
  {path: 'product', component: ProductComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }