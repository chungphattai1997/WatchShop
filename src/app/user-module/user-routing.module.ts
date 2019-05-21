import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleComponent } from './user-module.component';
import { HomePageComponent } from './home-module/home-page.component';
import { DetailModuleComponent } from './detail-module/detail-module.component';
import { CartModuleComponent } from './cart-module/cart-module.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', component: UserModuleComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'detail/:id/:title', component: DetailModuleComponent },
      { path: 'cart', component: CartModuleComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
