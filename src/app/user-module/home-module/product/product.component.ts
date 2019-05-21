import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_core/models/Product';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() { 
  }
 
}
