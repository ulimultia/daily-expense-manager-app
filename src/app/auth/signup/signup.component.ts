import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

  GoogleAuth() {
    this.authService.googleAuthService();
  }

  SignUp(email: string, password: string) {
    this.authService.signUpService(email, password);
  }

  SignIn(email: string, password: string) {
    this.authService.signInService(email, password);
  }

}
