import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './product/product.component';
import { HomePageComponent } from './home-page.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CarouselComponent,
    ProductComponent,
    HomePageComponent,
    ShowProductsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModuleModule { }
