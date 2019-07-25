import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  role: string = "admin";
  // maybe any?
  status: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log("initial default loginstatus: ", this.status);
    this.authService.login(this.email, this.password, this.role, (x) => {
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
        this.authService.setProfile(x[0]);
        alert("You're succesfully logged in! Use the sidebar to navigate through pages.")
      } 
      else {
        alert("Incorrect Login Information!");
      }  
    });
  }

}
