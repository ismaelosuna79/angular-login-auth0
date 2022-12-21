import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceFB {

  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.credential);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
