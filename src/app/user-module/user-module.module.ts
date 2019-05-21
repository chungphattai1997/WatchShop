import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleComponent } from './user-module.component';
import { GeneralModuleModule } from '../general-module/general-module.module';
import { HomeModuleModule } from './home-module/home-module.module';
import { DetailModuleModule } from './detail-module/detail-module.module';
import { CartModuleModule } from './cart-module/cart-module.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserModuleComponent],
  imports: [
    CommonModule,
    GeneralModuleModule,
    HomeModuleModule,
    DetailModuleModule,
    CartModuleModule,
    UserRoutingModule
  ],
})
export class UserModuleModule { }
