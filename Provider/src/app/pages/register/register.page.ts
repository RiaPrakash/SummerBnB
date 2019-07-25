import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';
import { NavController } from '@ionic/angular';
import { ProviderAst } from '@angular/compiler';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  newprovider: User;
  provider: User;

  constructor(private authServiceService: AuthServiceService, private navCtrl: NavController) { }

  ngOnInit() {
    this.provider = new User();
    this.newprovider = new User();
    this.newprovider.role = "provider";
  }

  register() {
    console.log("newprovider is ", this.newprovider)
    this.authServiceService.registerProvider(this.newprovider, (x) => {
      console.log("x received is ", x);
      console.log("role ", x.role);
      console.log("email ", x.email);

      if (x != null) {
        // this.provider = this.authServiceService.getUserByEmail(x.role, x.email)[0];

        this.authServiceService.getUserByEmail(x.role, x.email).subscribe(response => {
          console.log("FUCK: ", response);
          this.provider = response[0];

          // Do the rest ater the provider has been recieved 

          console.log("this.provider after getUserByEmail: ", this.provider);
          console.log("this.provider.id after getUserByEmail: ", this.provider.Id);
          this.authServiceService.setProfile(this.provider);
          this.navToListings();

          });

      } else {
        alert("Could not register login!");
      }
    });
  }


  navToListings() {
    this.navCtrl.navigateForward("curlistings");
  }

}
