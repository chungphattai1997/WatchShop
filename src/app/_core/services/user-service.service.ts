import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    //let header = "Access-Control-Allow-Origin";
    let obs: Observable<any>;
    let url = "http://192.168.43.154:8088/users/getusers"
    obs = this.http.get(url);
    return obs;
  }
}
