import { Component, OnInit } from '@angular/core';
 import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
 import { RegistrationService } from '../registration.service';
 import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 msg='';
  User: any;
  constructor(private service: RegistrationService,private router : Router ) {}

  ngOnInit() {
  }
userlogin(){
 this.service.userloginFromRemote(this.User).subscribe(
  data =>{
    console.log("response received");
     this.router.navigate(['/loginsuccess'])
  },
  error =>{
    console.log("exception occured");
    this.msg="Bad credentials, please enter vaild emailId and password";
  }
 );
}
gotoregistration(){
  this.router.navigate(['/registration'])
}
}
 