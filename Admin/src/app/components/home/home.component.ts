import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProvidersService } from '../../services/service-providers.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  newuser: User = new User();
  newprovider: ServiceProvider = new ServiceProvider();

  constructor(private userService: UserService, private serviceProvidersService: ServiceProvidersService, private http: HttpClient, private authService: AuthService) { 
  };
  // constructor(private userService: UserService, private serviceProvidersService: ServiceProvidersService, private http: HttpClient, private authService: AuthService, private navCtrl: NavController) { 
  // };
 
  ngOnInit() {
    if (this.authService.getProfile()){
    }
    else {
      alert("Not logged in! You must log in first");
      // Cheating, assuming Admin opens on port 4200
      window.location.replace("http://localhost:4200/login");
    }
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
