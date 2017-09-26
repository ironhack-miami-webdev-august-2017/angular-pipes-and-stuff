import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { EmojifyPipe } from './pipes/emojify.pipe';
import { RockSearchComponent } from './rock-search/rock-search.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CryptoCurrencyComponent,
    EmojifyPipe,
    RockSearchComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
