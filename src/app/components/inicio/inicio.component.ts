import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { AuthServiceFB } from 'src/app/auth.service';
declare var FB: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private http: HttpClient, public authServices: AuthServiceFB) { }

  ngOnInit(): void {
    
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '394951114363257',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0] as any;
       if (d.getElementById(id)) {return;}
       js = d.createElement(s) as any; 
       js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

     this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      if(isAuthenticaed) {
        this.router.navigate(['/dashboard'])
      }
    })

  }

  login() {
    this.auth.loginWithRedirect().subscribe(resp=>{
      console.log(resp)
    })
  }

  loginF(){
    this.http.get("http://localhost:3000/api/facebook/redirect").subscribe(resp=>{
      console.log(resp);
    })
  }

}
