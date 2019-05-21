import { Component, OnInit } from '@angular/core';
import { CartControlService } from 'src/app/_core/control/cart-control.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  lenghtCart: number = 0;

  constructor(
    private cartControl: CartControlService
  ) { }

  ngOnInit() {
    this.cartControl.getListCart().subscribe((res: any[]) => {
      this.lenghtCart = res.length;
    })
  }

}
