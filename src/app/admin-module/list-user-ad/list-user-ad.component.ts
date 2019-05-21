import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_core/services/user-service.service';

@Component({
  selector: 'app-list-user-ad',
  templateUrl: './list-user-ad.component.html',
  styleUrls: ['./list-user-ad.component.css']
})
export class ListUserAdComponent implements OnInit {

  listUser: Array<any> = [];

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    let temp = this.userService.getAllUsers().subscribe(res => {
      this.listUser = res;
      console.log(this.listUser);
      temp.unsubscribe();
    }, err => {
      console.log(err);
      temp.unsubscribe();
    })
  }

}
