import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {

  user: User;

  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit() {
    this.user = this.authServiceService.getProfile();
  }

  deleteProfile(){
    this.authServiceService.deleteProfile();
  }

  updateProfile(){
    this.authServiceService.updateProfile();
  }

  signout(){
    this.authServiceService.signout();
  }

}
