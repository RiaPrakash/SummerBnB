import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;
  role: string = "provider";
  status: any;

  constructor(
    private navCtrl: NavController, private authServiceService: AuthServiceService
  ) {}

  login() {
    console.log("initial default loginstatus: ", this.status);
    this.authServiceService.login(this.email, this.password, this.role, (x) => {
      console.log("x recieved: ", x);
      // this.status = x;
      if (x.length > 0){
        this.status = true;
      }
      else {
        this.status = false;
      }
      console.log("status recieved after getlogin() function was run: ", this.status);
      if (this.status == true){
        // Set Profile to first element of Array
        this.authServiceService.setProfile(x[0]);
        this.navToListings();
      } 
      else {
        alert("Incorrect Login Information!");
      }  
    });
  }

  navToListings() {
    this.navCtrl.navigateForward("curlistings");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }

  switchToUser() {
    // Assuming Provider is running on port 8100 and Consumer(User) on port 8101
    window.location.replace("http://localhost:8101/home");
  }

}
