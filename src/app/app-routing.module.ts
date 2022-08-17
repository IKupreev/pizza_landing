import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PromoComponent } from './components/promo/promo.component';
import { CartGuard } from './services/cart.guard';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'promo', component: PromoComponent},
  {path:'cart', component: CartComponent, canActivate: [CartGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
