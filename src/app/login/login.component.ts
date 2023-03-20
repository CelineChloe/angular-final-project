import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private appComponent: AppComponent
  ) {}

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password')
  }

  onLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/profile']);
    this.appComponent.updateLoginStatus(true);
    console.log("email: ", this.email?.value);
    console.log("password: ", this.password?.value);
  }
}
