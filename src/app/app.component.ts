import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  isLoggedIn = false;

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.isLoggedIn = true;
    }
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }
}
