import { Component, OnInit } from '@angular/core';
import { ServiceProvidersService } from '../../services/service-providers.service';
import { ServiceProvider } from '../../models/service-provider';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  // providers of type service provider
  providers: any;

  constructor(private serviceProvidersService: ServiceProvidersService, private http:HttpClient) { 
  }

  ngOnInit() {
    this.serviceProvidersService.getAllProviders().subscribe(response => {
    this.providers = response;
    });
  }

}
