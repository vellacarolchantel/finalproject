import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppException } from '../core/models/app-exception';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  logging: boolean = false;
  alertClass: string = 'alert-danger';
  showAlert: boolean = false;
  alertMessage: string = '';

  public form: FormGroup = new FormGroup({
    username: new FormControl(undefined, {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl(undefined, {
      validators: [Validators.required],
    }),
  });

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    public readonly authService: AuthService
  ) {}

  loginUser() {
    this.logging = true;
    this.authService
      .login({
        email: this.form.controls['username'].value,
        password: this.form.controls['password'].value,
      })
      .subscribe({
        next: (success) => {
          this.logging = false;
          this.alertMessage = 'Login successful';
          this.showAlert = true;
          this.alertClass = 'alert-success';
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2_00);
        },
        error: (error: AppException) => {
          this.logging = false;
          this.alertMessage = error.message;
          this.showAlert = true;
          this.alertClass = 'alert-danger';
          setTimeout(() => {
            this.showAlert = false;
          }, 1_000);
        },
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        username: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required),
      },
      { updateOn: 'submit' }
    );
  }
}
