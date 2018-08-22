import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { User } from './user';
import { FormserviceService } from './formservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 @ViewChild('s') form:NgForm;
 question= 'advanced';
 detail = {
  email: '',
  password: '',
  secrect: ''
 }
 submitted;
 user = new User();
 constructor(private userService:FormserviceService) {}
  ngOnInit() {
    
  }
 
  onSubmit(){
    this.submitted = true;
   console.log(this.form);
   this.user =this.form.value;
   this.userService.createUser(this.user);
   this.user = new User();
   this.detail.email = this.form.value.userData.email;
   this.detail.password = this.form.value.userData.password;
   this.detail.secrect = this.form.value.secrect;

  
   
  }
  Onreset() {
    this.submitted = false;
    alert('Do you want to modify the form');
    this.form.reset();
  }
}
