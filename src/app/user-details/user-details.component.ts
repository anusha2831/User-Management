import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user;
  constructor( private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      userService.getUserById(params.id)
      .subscribe(
        user => {console.log(user); this.user = JSON.stringify(user); },
        error => console.log(error)
      );
    });
  }


ngOnInit() {
}

}
