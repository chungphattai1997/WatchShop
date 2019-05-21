import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/_core/services/product-services.service';

@Component({
  selector: 'app-list-product-ad',
  templateUrl: './list-product-ad.component.html',
  styleUrls: ['./list-product-ad.component.css']
})
export class ListProductAdComponent implements OnInit {

  listProduct: Array<any>;

  constructor(
    private productService: ProductServicesService
  ) { }

  ngOnInit() {
    let temp = this.productService.getAllProducts().subscribe(res => {
      this.listProduct = res;
      console.log(this.listProduct);
      temp.unsubscribe();
    }, err => {
      console.log(err);
      temp.unsubscribe();
    })
  }

}
