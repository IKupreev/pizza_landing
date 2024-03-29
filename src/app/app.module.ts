import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PromoComponent } from './components/promo/promo.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/menu/item/item.component';
import { CartGuard } from './services/cart.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PromoComponent,
    HeaderComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [CartGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
