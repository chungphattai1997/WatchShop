import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModuleComponent } from './cart-module.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartModuleComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartModuleComponent
  ]
})
export class CartModuleModule { }
