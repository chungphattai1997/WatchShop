import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartControlService {

  private carts: Array<any> = [];

  private cartControl = new BehaviorSubject(this.carts);

  constructor() { 
    this.getDataLocalSt();
  }

  getListCart() {
    return this.cartControl;
  }

  getListCartNonSub() {
    return this.carts;
  }

  AddCart(cart) {
    let existCart = this.checkExist(cart.id);
    if (!existCart.status) {
      let cc = {
        amount: 1,
        cart
      }
      this.carts.push(cc);
      this.cartControl.next(this.carts);
    } else {
      this.carts[existCart.index].amount++;
      this.cartControl.next(this.carts);
    }
    this.setDataLocalSt();
  }

  private checkExist = (id) => {
    let status = false;
    let index = -1;
    this.carts.map((item, idx) => {
      if (item.cart.id == id) {
        status = true;
        index = idx;
      }
    });
    return {
      status,
      index
    }
  }

  RemoveAllCart(){
    this.carts = [];
    this.cartControl.next(this.carts);
    this.setDataLocalSt();
  }

  RemoveCart(id) {
    let existCart = this.checkExist(id);
    if (existCart.status) {
      this.carts = this.carts.filter(item => item.cart.id != id);
      this.cartControl.next(this.carts);
      this.setDataLocalSt();
    } else {
      alert("Sản phẩm không có trong giỏ hàng để xóa!");
    }
  }

  AmountCart(data: { check: boolean, id }) {
    let it = this.checkExist(data.id);
    if (it.status) {
      if (data.check) {
        this.carts[it.index].amount++;
      } else if (this.carts[it.index].amount > 1) {
        this.carts[it.index].amount--;
      }
      this.cartControl.next(this.carts);
      this.setDataLocalSt();
    }
  }

  private setDataLocalSt(){
    let str = JSON.stringify(this.carts);
    localStorage.setItem("Cart", str);
  }

  private getDataLocalSt(){
    let data = JSON.parse(localStorage.getItem("Cart"));
    if(data){
      this.carts = data;
      this.cartControl.next(this.carts);
    } 
  }
}
