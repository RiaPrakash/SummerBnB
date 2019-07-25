import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../models/http-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  user: User;

  constructor(private http: HttpClient, private navController: NavController) { }

  login(email, password, role, callback){
    this.http.post('http://localhost:5000/api/auth/login', {email, password, role}).subscribe((response: Array<User>) => {
    console.log("response recieved by backend login: ", response);
    // this.loggedin = response;
    callback(response);
    });
  }

  registerUser(user, callback){
    this.http.post('http://localhost:5000/api/auth/register', user).subscribe((response: Array<User>) => {
    console.log("respone is: ", response);
    callback(response);
    });
  }

  setProfile(userToSet: User){
    console.log("inside set profile ");
    this.user = userToSet;
    console.log("after setting, user: ", this.user);
    console.log("after setting, userId: ", this.user.Id);
  }

  getProfile(){
    console.log("inside get profile ");
    console.log("this.user ", this.user);
    return this.user;
  }

  getUserByEmail(role, email){
    return this.http.get('http://localhost:5000/api/users/' + role + '/' + email);
  }

  getListingsByProviderId() {
    return this.http.get('http://localhost:5000/api/listings/' + this.user.Id);
  }

  getAllListings(){
    return this.http.get('http://localhost:5000/api/listings');
  }


}