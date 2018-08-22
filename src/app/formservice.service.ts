import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
data ;
  constructor() {
    
   }
    createUser(user) {
       this.data =user;
      console.log(this.data);
  }
  getUser() {
    console.log(this.data);
    return this.data;
    
  }
}
