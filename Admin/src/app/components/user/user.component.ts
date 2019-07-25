import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // users: Array<User>;
  users: any;

  constructor(private userService: UserService, private http:HttpClient) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
    this.users = response;
    });
  }

}