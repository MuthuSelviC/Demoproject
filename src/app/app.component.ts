import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormserviceService } from './formservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  @ViewChild('s') form:NgForm;
//  question= 'advanced';
//  detail = {
//   email: '',
//   password: '',
//   secrect: ''
//  }
//  submitted;
//  user;
//  det;
//  constructor(private userService:FormserviceService,
//             private router: Router) {}
//   ngOnInit() {
    
//   }
 
//   onSubmit(){
//     this.submitted = true;
//    console.log(this.form);
//    this.user =this.form.value;
//    this.det = { 
//      email :this.user.userData.email,
//     pwd: this.user.userData.password
//   }
 
//    this.userService.createUser(this.det);
//    this.detail.email = this.form.value.userData.email;
//    this.detail.password = this.form.value.userData.password;
//    this.detail.secrect = this.form.value.secrect;
//    this.router.navigate['/display'];
//   }
//   Onreset() {
//     this.submitted = false;
//     alert('Do you want to modify the form');
//     this.form.reset();
//   }
}
