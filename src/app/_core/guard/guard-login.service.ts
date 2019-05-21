import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginService {
  private isLogin = false;
  constructor() { }

  setIsLogin(bol){
    this.isLogin = bol;
  }

  getIsLogin(){
    return this.isLogin;
  }
}
