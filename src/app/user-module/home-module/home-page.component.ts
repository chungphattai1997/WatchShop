import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/_core/services/product-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  //carousel
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  //list product
  listProduct: Array<any> = [];
  listCategory: Array<any> = [];

  constructor(private productService: ProductServicesService) { }

  ngOnInit() {
    let temp = this.productService.getAllProducts().subscribe(res => {
      this.listProduct = this.filterByIdCategory(res);
      console.log(this.listProduct);

      temp.unsubscribe();
    }, err => {
      console.log(err);
      temp.unsubscribe();
    });

    let temp2 = this.productService.getAllCategory().subscribe(res => {
      this.listCategory = res;
      temp2.unsubscribe()
    }, err => {
      console.log(err);
      temp2.unsubscribe;
    })
  }

  filterByIdCategory(data: Array<any>) {
    let arrTemp = [];
    this.listCategory.map(item => {
      let arr = data.filter(i => i.id_category == item.id);
      arrTemp.push({
        title: item.title,
        data: arr
      })
    });
    return arrTemp;
  }
}
