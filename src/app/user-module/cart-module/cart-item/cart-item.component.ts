import { Component, OnInit, Input } from '@angular/core';
import { CartControlService } from 'src/app/_core/control/cart-control.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {
  
  @Input() cart;
  @Input() amount;

  constructor(
    private cartCT: CartControlService
  ) { }

  ngOnInit() {
  }

  removeCart(){
    this.cartCT.RemoveCart(this.cart.id);
  }

  amountCart(isPlus){
    this.cartCT.AmountCart({
      check: isPlus,
      id: this.cart.id
    })
  }
}
