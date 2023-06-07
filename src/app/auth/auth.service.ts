import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../model/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';

// export interface AuthRequestData{
//   email: string,
//   password: string,
//   returnSecureToken: boolean
// }

// export interface AuthResponseData{
//   idToken: string,
//   email: string,
//   refreshToken: string,
//   expiresIn: string,
//   localId: string
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: any;

  // private obs = new BehaviorSubject<any>({});
  // userObs = this.obs.asObservable();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private httpClient: HttpClient
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        console.log("1 ", this.userData);

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        console.log("2 ", user);
      }
    });
  }

  getUser() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        return this.userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
      } else {
        return null;
      }
    });
  }

  // Sign in with email/password
  async signInService(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result);
      console.log(result.user);

      this.SetUserData(result.user);
      this.router.navigate(['dashboard']);
    })
    .catch((error)=> {
      window.alert(error.message);
    })
    // const testAuth = auth.getAuth();
    // auth.signInWithEmailAndPassword(testAuth, email, password)
    // .then((userCredential) => {
    //   console.log(userCredential);
    //   this.SetUserData(userCredential.user);
    //   this.router.navigate(['dashboard']);
    // })
    // .catch((e) => {
    //   console.log(e);

    // })

    // try {
    //   const result = await this.afAuth
    //     .signInWithEmailAndPassword(email, password);
    //   console.log(result);

    //   return this.afAuth.authState.subscribe((user) => {
    //     if (user) {
    //       console.log(user);
    //       this.SetUserData(result.user);
    //       this.router.navigate(['dashboard']);
    //     }
    //   });
    // } catch (error) {
    //   window.alert(error);
    // }
  }
  // Sign up with email/password
  async signUpService(email: string, password: string) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password);
      console.log(result);

      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      // this.SendVerificationMail();
      this.router.navigate(['auth']);
      this.SetUserData(result.user);
    }
    catch (error) {
      window.alert(error);
    }
  }
  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  async googleAuthService() {
    return this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        console.log(result);
        console.log(result.user);

        this.SetUserData(result.user);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    this.userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    // console.log(this.userData);

    return userRef.set(this.userData, {
      merge: true,
    });
  }
  // Sign out
  async SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    });
  }


}
