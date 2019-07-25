import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {

  user: User;

  constructor(private authServiceService: AuthServiceService, private navCtrl: NavController
    ) { }

  ngOnInit() {
    if (this.authServiceService.getProfile()){
      // Get profile to view
      this.user = this.authServiceService.getProfile();
    } 
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
  }

  deleteProfile(){
    this.authServiceService.deleteProfile();
  }

  updateProfile(){
    this.navCtrl.navigateForward("updateprofile");
  }

  signout(){
    this.authServiceService.signout();
  }

}
