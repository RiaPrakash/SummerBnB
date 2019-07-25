import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

// Gives us structure for data we're geting back from API
class ResponseObject {
  success: boolean;
  message: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User;
  

  constructor(private http: HttpClient) { }

  login(email, password, role, callback){
    this.http.post('http://localhost:5000/api/auth/login', {email, password, role}).subscribe((response: Array<User>) => {
    console.log("response recieved by backend login: ", response);
    // this.loggedin = response;
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

}

