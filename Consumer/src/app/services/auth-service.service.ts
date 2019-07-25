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

  login(email, password, role, callback) {
    this.http.post('http://localhost:5000/api/auth/login', { email, password, role }).subscribe((response: Array<User>) => {
      console.log("response recieved by backend login: ", response);
      callback(response);
    });
  }

  registerUser(user, callback) {
    this.http.post('http://localhost:5000/api/auth/register', user).subscribe((response: Array<User>) => {
      console.log("respone is: ", response);
      callback(response);
    });
  }

  setProfile(userToSet: User) {
    console.log("inside set profile ");
    this.user = userToSet;
    console.log("after setting, user: ", this.user);
    console.log("after setting, userId: ", this.user.Id);
  }

  getProfile() {
    console.log("inside get profile ");
    console.log("this.user ", this.user);
    return this.user;
  }

  getUserByEmail(role, email) {
    return this.http.get('http://localhost:5000/api/users/' + role + '/' + email);
  }

  getListingsByProviderId() {
    return this.http.get('http://localhost:5000/api/listings/' + this.user.Id);
  }

  getAllListings() {
    return this.http.get('http://localhost:5000/api/listings');
  }

  signout() {
    this.user = null;
    this.navController.navigateForward('home');
  }

  // deleteProfile(){
  //   this.http.post('http://localhost:5000/api/users/delete/', this.user).subscribe((response) => {
  //     if (response) { // successful http request, same format as HttpResponse model / class
  //       this.navController.navigateForward('home'); // navigate to the users page
  //     }
  //     else {
  //       alert('User was not deleted'); // display an alert if response has an error 
  //     }
  //     console.log(response);
  //   });
  // }

  deleteProfile() {
    this.http.post('http://localhost:5000/api/users/delete/', this.user).subscribe((response) => {
      if (response) {
        this.http.post('http://localhost:5000/api/bookings/delete/user', this.user).subscribe((response) => {
          if (response) { // successful http request, same format as HttpResponse model / class
            console.log("deleted user and booking: ", response);
            this.navController.navigateForward('home'); // navigate to the users page
          }
          else {
            alert('User bookings not deleted');
          }
        });
      }
      else {
            alert('User was not deleted');
          }
      console.log(response);
      });
  }

  updateProfile(profileToUpdate: User) {
    this.http.post('http://localhost:5000/api/users/update/', profileToUpdate).subscribe((response) => {
      if (response) { // successful http request, same format as HttpResponse model / class
        console.log("updated: ", response);
        this.navController.navigateForward('curlistings'); // navigate to the users page
      }
      else {
        alert('User was not updated'); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

}