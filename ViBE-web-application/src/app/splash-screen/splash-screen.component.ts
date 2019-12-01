import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onClick_Login() {
    console.log("login was clicked");
    document.getElementById("login-toggle").style.backgroundColor="#F0AD4E";
    document.getElementById("login-toggle").style.color="#343A40";
    document.getElementById("signup-toggle").style.backgroundColor="#fff";
    document.getElementById("signup-toggle").style.color="#343A40";
    document.getElementById("signup-form").style.display="none";
    document.getElementById("login-form").style.display="block";
  }

  onClick_Signup() {
    console.log("signup was clicked");
    document.getElementById("login-toggle").style.backgroundColor="#fff";
    document.getElementById("login-toggle").style.color="#343A40";
    document.getElementById("signup-toggle").style.backgroundColor="#F0AD4E";
    document.getElementById("signup-toggle").style.color="#343A40";
    document.getElementById("login-form").style.display="none";
    document.getElementById("signup-form").style.display="block";
  }

  onClick_CloseModal() {
    console.log("modal close clicked");
    document.getElementById('modal-login').style.display='none';
  }

  onClick_Authenticate() {
    console.log("modal close clicked");
    document.getElementById('modal-login').style.display='none';
    document.getElementById('Splash').style.display='none';
  }


}
