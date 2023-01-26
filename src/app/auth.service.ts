import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider } from 'firebase/auth';
import { HttpClient } from '@angular/common/http';


declare var FB:any;
@Injectable({
  providedIn: 'root'
})
export class AuthServiceFB {

  constructor(
    public afAuth: AngularFireAuth,
    private http: HttpClient // Inject Firebase auth service
  ) {
    FB.init({
      appId      : '905821337098226',
      xfbml      : true,
      cookie     : true,
      version    : 'v15.0' // use graph api version 2.5
    });
  }
  // Sign in with Facebook
  // FacebookAuth() {
  //   return this.AuthLogin(new FacebookAuthProvider());
  // }
  // // Auth logic to run auth providers
  // AuthLogin(provider:any) {
  //   return this.afAuth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       console.log(result.user?.providerData);
  //       console.log('You have been successfully logged in!');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login((result:any) => {
        console.log(result)
      }, {scope: 'public_profile, email, instagram_basic, pages_show_list, instagram_content_publish, pages_read_engagement'})
      //permisos para publicarE
      //ads_management, business_management, instagram_content_publish, pages_read_engagement, instagram_basic

      //Permisos normales facebook
      //public_profile,email, instagram_basic,

      //public_profile, email, instagram_basic, pages_show_list, ads_management,business_management, instagram_content_publish, pages_read_engagement
    });

  }
  pages(){
    return new Promise((resolve, reject) => {
      FB.api(
        "/" + "5746232952133782" + '?fields=name,accounts,email',
        (result:any) => {
         console.log(result)
        });
    });
  }
}
