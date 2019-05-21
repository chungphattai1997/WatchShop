import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    let obs: Observable<any>;
    // let url = "http://thegioiwatch.somee.com/products/getproducts";
    let url = "http://192.168.43.154:8088/products/getproducts";
    obs = this.http.get(url);
    return obs;
  }
  getAllCategory(){
    let obs: Observable<any>;
    // let url = "http://thegioiwatch.somee.com/categories/getcategories";
    let url = "http://192.168.43.154:8088/categories/getcategories";
    obs = this.http.get(url);
    return obs;
  }
}
