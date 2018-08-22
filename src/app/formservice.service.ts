import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor() {
    
   }
    createUser(user: User) {
      console.log('Email ' + user.email1);
      console.log('Password ' + user.password1);
  }
}
