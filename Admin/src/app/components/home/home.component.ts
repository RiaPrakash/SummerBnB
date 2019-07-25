import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProvidersService } from '../../services/service-providers.service';
import { HttpClient } from '@angular/common/http';
// import { userInfo } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  newuser: User = new User();
  newprovider: ServiceProvider = new ServiceProvider();

  constructor(private userService: UserService, private serviceProvidersService: ServiceProvidersService, private http: HttpClient) { 
  };
 
  ngOnInit() {

  }

  submitUser(){
    this.http.post('http://localhost:5000/api/users/create',
       this.newuser).subscribe((response) => {
          console.log(response);
        });
  }

  submitProvider(){
    this.http.post('http://localhost:5000/api/users/create',
       this.newprovider).subscribe((response) => {
          console.log(response);
        });
  }

}
