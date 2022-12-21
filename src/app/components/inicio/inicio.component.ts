import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { AuthServiceFB } from 'src/app/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private http: HttpClient, public authServices: AuthServiceFB) { }

  ngOnInit(): void {
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
    this.http.get("https://apiservice.onrender.com/api/facebook/redirect").subscribe(resp=>{
      console.log(resp);
    })
  }

}
