import { Component, OnInit } from '@angular/core';
import { ServiceProvidersService } from '../../services/service-providers.service';
import { ServiceProvider } from '../../models/service-provider';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  // providers of type service provider
  providers: any;

  constructor(private serviceProvidersService: ServiceProvidersService, private http:HttpClient, private authService: AuthService) { 
  }

  ngOnInit() {
    if (this.authService.getProfile()){
      this.serviceProvidersService.getAllProviders().subscribe(response => {
        this.providers = response;
        });
    }
    else {
      alert("Not logged in! You must log in first");
      // Cheating, assuming Admin opens on port 4200
      window.location.replace("http://localhost:4200/login");
    }
    
  }

}
