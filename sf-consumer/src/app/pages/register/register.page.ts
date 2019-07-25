import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  newuser: User;
  user: User;

  constructor(private authServiceService: AuthServiceService, private navCtrl: NavController) { }

  ngOnInit() {
    this.user = new User();
    this.newuser = new User();
    this.newuser.role = "user";
  }

  register() {
    console.log("newuser is ", this.newuser)
    this.authServiceService.registerUser(this.newuser, (x) => {
      console.log("x received is ", x);
      console.log("role ", x.role);
      console.log("email ", x.email);
      // If the user was registered
      if (x == "user already exists") {
        
        alert("User with this email already exists! Try again.");

      } else {

        // Get entire user object into this.user
        this.authServiceService.getUserByEmail(x.role, x.email).subscribe(response => {
          this.user = response[0];

          // Set profile, navigate to Current Listings ater the user object has been recieved 
          this.authServiceService.setProfile(this.user);
          this.navToListings();

        });
      }
    });
  }

  navToListings() {
    this.navCtrl.navigateForward("curlistings");
  }

}
