import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() { }

}
