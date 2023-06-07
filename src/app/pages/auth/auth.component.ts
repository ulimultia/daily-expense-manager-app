// import { AuthRequestData, AuthResponseData, AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  isLogin = true;
  isLoading = false;
  err!: string;
  hide = true;

  constructor(
    private authService: AuthService,
    // private router: Router
  ){}

  ngOnInit(): void {

  }

  GoogleAuth() {
    this.authService.googleAuthService();
  }

  SignUp(email: string, password: string) {
    this.authService.signUpService(email, password);
  }

  SignIn(email: string, password: string) {
    this.authService.signInService(email, password);
  }


  // onSwitchMode(){
  //   this.isLogin = !this.isLogin;
  // }

  // onSubmit(authForm: NgForm){

  // }

}
