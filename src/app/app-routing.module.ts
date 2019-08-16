import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SupermarketDetailComponent }  from './supermarket-detail/supermarket-detail.component';
import { SelectedSupermarketComponent } from './selected-supermarket/selected-supermarket.component'

const routes: Routes = [
  { path: 'supermarkets', component: SupermarketsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/supermarkets', pathMatch: 'full' },
  { path: 'detail/:id', component: SupermarketDetailComponent },
  { path: 'supermarket/:id', component: SelectedSupermarketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }