import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  constructor(
    private http: HttpClient
  ) { }

  CreateOrder(data) {
    const header: Headers = new Headers(); //cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type','application/json;charset=UTF-8');
    let url = "http://192.168.43.154:8088/orders/postorders";
    //let url = http://thegioiwatch.somee.com/orders/postorders";
    return this.http.post(url, data);
  }

  CreateOrderDetail(data) {
    const header: Headers = new Headers(); //cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type','application/json;charset=UTF-8');
    let url = "http://192.168.43.154:8088/odersdetails/postodersdetail";
    //let url = http://thegioiwatch.somee.com/odersdetails/postodersdetail";
    return this.http.post(url, data);
  }
}
