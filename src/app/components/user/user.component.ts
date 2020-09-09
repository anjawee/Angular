import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/UserTable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //Variable of type UserTable 
  users: UserTable[];

  //DI
  constructor(private _userService: UserService, private _router: Router) { }

  addUser() {
    this._router.navigate(['adduser']);
  }
  

  deleteUser(object:UserTable){
    let index = this.users.indexOf(object);
    this.users.splice(index,1);
 
  }
  
  ngOnInit(): void {
    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  

}