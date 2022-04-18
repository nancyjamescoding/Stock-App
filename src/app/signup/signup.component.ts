import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    username: null,
    full_name: null,
    email: null,
    business:null,
    avatar:null,
    password: null,
    password2: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  show = false
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username,full_name, email,business,avatar,password, password2 } = this.form;
    this.authService.register(username,full_name, email,business,avatar,password, password2).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log('---',err)
      }
    );
  }

  onTogglePassword(): void {
    this.show = !this.show;
  }
}

