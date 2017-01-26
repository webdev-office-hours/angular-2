import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls: [
        'assets/app.component.css'
  ], 
  template: `
                <nav class="navbar navbar-default">
                <div class="container-fluid">
                <div class="navbar-header"><a class="navbar-brand" href="#">XYZ Inc</a></div>
                <ul class="nav navbar-nav">
                  <li><a routerLink="/orders">Orders</a></li>
                  <li><a routerLink="/reports">Search</a></li>
                  <li><a routerLink="/utilities">Utilities</a></li>
                </ul>
                </div>
                </nav>
                  <router-outlet></router-outlet>
                <div class="container"></div>
  `
})
export class AppComponent { }