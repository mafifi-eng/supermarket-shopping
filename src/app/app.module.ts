import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { SupermarketDetailComponent } from './supermarket-detail/supermarket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermarketsComponent,
    SupermarketDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
