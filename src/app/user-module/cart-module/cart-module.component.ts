import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartControlService } from 'src/app/_core/control/cart-control.service';
import { CartServiceService } from 'src/app/_core/services/cart-service.service';
import { Order } from 'src/app/_core/models/Order';
import { OrderDetail } from 'src/app/_core/models/OrderDetail';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-module',
  templateUrl: './cart-module.component.html',
  styleUrls: ['./cart-module.component.css']
})
export class CartModuleComponent implements OnInit, OnDestroy {
  carts = [];

  listOrderDetail: Array<OrderDetail> = [];

  id_Order;

  sub: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  totalPrice: number = 0;

  constructor(
    private cartControl: CartControlService,
    private cartService: CartServiceService,
    private router: Router
  ) { }

  @ViewChild('frmOrder') frmOrder: NgForm;

  ngOnInit() {
    this.sub = this.cartControl.getListCart().subscribe(res => {
      this.carts = res;
      let temp = 0;
      this.carts.map(item => {
        temp += parseFloat(item.cart.price) * parseFloat(item.amount);
      })
      //console.log(this.carts);
      this.totalPrice = this.humanizeNumber(temp);
    });
  }

  humanizeNumber(n) {
    n = n.toString();
    while (true) {
      let n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3');
      if (n == n2) break;
      n = n2;
    }
    return n
  }

  CreateOrder(order: Order) {
    this.sub2 = this.cartService.CreateOrder(order).subscribe(res => {
      this.id_Order = res;
      console.log(this.id_Order);
      this.totalPrice = 0;
    }, err => {
      console.log(err);
      //this.cartControl.RemoveAllCart();
    });
  }

  CreateOrderDetail(idOrder) {
    let list = this.cartControl.getListCartNonSub();
    console.log(list);

    list.map(item => {
      let itemOrderDetail: OrderDetail = {
        id_order: idOrder,
        price: item.cart.price,
        product_id: item.cart.id,
        quantity: item.amount
      }
      this.listOrderDetail.push(itemOrderDetail);
    })
    console.log(this.listOrderDetail);

    this.listOrderDetail.map(item => {
      let orderDetail: OrderDetail = item;
      console.log("----");
      console.log(orderDetail);
      this.sub3 = this.cartService.CreateOrderDetail(orderDetail).subscribe(res => {
        console.log("Done");
        console.log(res);
        this.cartControl.RemoveAllCart();
        alert("Thanh toán thành công!");
        this.router.navigate(['']);
      }, err => {
        console.log(err);
      })
    })
  }

  BuyNow(value: Order) {
    let date = new Date().toLocaleString();
    value.datecreate = date;
    console.log(value);
    this.CreateOrder(value);
    setTimeout(() => { this.CreateOrderDetail(this.id_Order) }, 100);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sub2) this.sub2.unsubscribe();
    if (this.sub3) this.sub3.unsubscribe();
  }
}
