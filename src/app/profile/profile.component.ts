import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  formProfile = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  isAddShift: boolean = true;

  handleAddShift() {
    this.isAddShift = !this.isAddShift;
  }

  get firstName() {
    return this.formProfile.get('firstName');
  }

  get lastName() {
    return this.formProfile.get('lastName');
  }

  get id() {
    return this.formProfile.get('id');
  }

  get email() {
    return this.formProfile.get('email');
  }

  submit() {

  }
}
