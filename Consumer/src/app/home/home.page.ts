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
  role: string = "user";
  status: any;

  constructor(
    private navCtrl: NavController, private authServiceService: AuthServiceService
  ) {}

  login() {
    this.authServiceService.login(this.email, this.password, this.role, (x) => {
      if (x.length > 0){
        this.status = true;
      }
      else {
        this.status = false;
      }
      // If user is logged in, set profile and navigate to explore page
      if (this.status == true){
        this.authServiceService.setProfile(x[0]);
        this.navToListings();
      } 
      else {
        alert("Incorrect Login Information!");
      }  
    });
  }

  navToListings() {
    console.log("navigating to listings");
    this.navCtrl.navigateForward("curlistings");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }

  switchToProvider() {
    // Assuming Provider is running on port 8100 and Consumer(User) on port 8100
    window.location.replace("http://localhost:8100/home");
  }

}
