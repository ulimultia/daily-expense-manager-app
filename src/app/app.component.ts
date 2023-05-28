import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-expense-manager-app';
  isSideNavOpen: boolean = true

  openSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen
  }
}
