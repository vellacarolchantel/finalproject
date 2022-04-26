import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registering: boolean = false;
  form: FormGroup = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    user_name: new FormControl(),
    user_password: new FormControl(),
    confirm_password: new FormControl(),
    email: new FormControl(),
    cid: new FormControl(),
    course: new FormControl(),
  });
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  register() {
    this.registering = true;
    setTimeout(() => {
      this.registering = false;
      this.router.navigateByUrl('/landing-page');
    }, 3_000);
  }
}
