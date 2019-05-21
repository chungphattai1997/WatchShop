import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductServicesService } from '../../_core/services/product-services.service';
import { Product } from '../../_core/models/Product';
import { CartControlService } from '../../_core/control/cart-control.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html'
})
export class DetailModuleComponent implements OnInit, OnDestroy {

  id: string;
  private sub: Subscription;
  item: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServicesService,
    private cartControl: CartControlService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getDetailProduct();
    });
  }

  getDetailProduct() {
    let temp = this.productService.getAllProducts().subscribe(res => {
      console.log(res);
      res.map(itemTemp => {
        if (itemTemp.id == this.id) {
          temp.unsubscribe();
          this.item = itemTemp;
          return;
        }
      })

      // res.map((item) => {
      //   item.map(item2 => {
      //     if (item2.id == this.id) {
      //       temp.unsubscribe();
      //       this.item = item2;
      //     }
      //   })
      // });
    }, err => {
      temp.unsubscribe();
    })
  }

  AddCart() {
    this.cartControl.AddCart(this.item);
  }

  // RemoveCart() {
  //   this.cartControl.RemoveCart(this.item.id);
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
