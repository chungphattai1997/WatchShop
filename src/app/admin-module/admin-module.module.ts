import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleComponent } from './admin-module.component';
import { MenuLeftAdComponent } from './menu-left-ad/menu-left-ad.component';
import { ListUserAdComponent } from './list-user-ad/list-user-ad.component';
import { ListProductAdComponent } from './list-product-ad/list-product-ad.component';
import { LoginAdComponent } from './login-ad/login-ad.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminModuleComponent,
    MenuLeftAdComponent,
    ListUserAdComponent,
    ListProductAdComponent,
    LoginAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminModuleComponent,
    MenuLeftAdComponent,
    ListUserAdComponent,
    ListProductAdComponent,
    LoginAdComponent
  ]
})
export class AdminModuleModule { }
