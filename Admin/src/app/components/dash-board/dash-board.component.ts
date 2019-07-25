import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  navItems: Array<any> = [
    {
      name: 'Login',
      rout: '/login'
    },
    {
      name: 'Home',
      rout: '/home'
    },
    {
      name: 'Users',
      rout: '/users'
    },
    {
      name: 'Service Providers',
      rout: '/service-providers'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

  navTo(page) {
    debugger;
    this.router.navigate([page.rout]);
  }

}
