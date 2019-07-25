import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {

  updatedprofile: any;

  constructor(private authServiceService: AuthServiceService, private navCtrl: NavController) { }

  ngOnInit() {
    if (this.authServiceService.getProfile()) {
      this.updatedprofile = this.authServiceService.getProfile();
    }
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
  }

  update(){
    this.authServiceService.updateProfile(this.updatedprofile);
  }


}
