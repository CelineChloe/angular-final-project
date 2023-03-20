import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownOpen = false;

  constructor(
    private router: Router,
    private appComponent: AppComponent
  ) { }

  handleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
    this.appComponent.updateLoginStatus(false);
  }
}
