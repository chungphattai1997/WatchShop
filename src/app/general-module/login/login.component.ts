import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSign: boolean = true; //true => sign In <> sign Up 

  constructor() { }

  ngOnInit() {
  }

  changeSignModal(){
    this.isSign = !this.isSign;
  }
}
