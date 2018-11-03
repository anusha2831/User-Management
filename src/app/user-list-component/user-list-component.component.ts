import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service/user.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {
  users;

  constructor(private userService: UserService) { 
    userService.getUsers()
                .subscribe(
                  usersList => this.users = usersList,
                  error =>  console.log(error));
  }
 /* getUserById(userID){
    //console.log('clicked'+userID);
  }*/
  ngOnInit() {
  }
}
