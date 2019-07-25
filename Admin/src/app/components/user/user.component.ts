import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // users: Array<User>;
  users: any;

  constructor(private userService: UserService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.getProfile()) {
      this.userService.getAllUsers().subscribe(response => {
        this.users = response;
      });
    }
    else {
      alert("Not logged in! You must log in first");
      // Cheating, assuming Admin opens on port 4200
      window.location.replace("http://localhost:4200/login");
    }
  }

}