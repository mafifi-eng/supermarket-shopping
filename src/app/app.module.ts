import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { SupermarketDetailComponent } from './supermarket-detail/supermarket-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SupermarketSearchComponent } from './supermarket-search/supermarket-search.component';
import { SelectedSupermarketComponent } from './selected-supermarket/selected-supermarket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SupermarketCarouselComponent } from './supermarket-carousel/supermarket-carousel.component';
import { SupermarketPromotionsComponent } from './supermarket-promotions/supermarket-promotions.component';
import { SupermarketFeaturedItemsComponent } from './supermarket-featured-items/supermarket-featured-items.component';
import { SupermarketBestSellersComponent } from './supermarket-best-sellers/supermarket-best-sellers.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermarketsComponent,
    SupermarketDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SupermarketSearchComponent,
    SelectedSupermarketComponent,
    NavbarComponent,
    SupermarketCarouselComponent,
    SupermarketPromotionsComponent,
    SupermarketFeaturedItemsComponent,
    SupermarketBestSellersComponent,
    ProductComponent,
    CartComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
