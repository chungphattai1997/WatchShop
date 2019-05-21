import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardLoginService } from 'src/app/_core/guard/guard-login.service';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.component.html',
  styleUrls: ['./login-ad.component.css']
})
export class LoginAdComponent implements OnInit {

  constructor(
    private router: Router,
    private guardSv: GuardLoginService
  ) { }

  ngOnInit() {

  }

  login(){
    this.guardSv.setIsLogin(true);
    this.router.navigate(['/admin']);
  }

}
