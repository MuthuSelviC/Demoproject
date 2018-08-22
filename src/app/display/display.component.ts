import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
d ;
obj;
  constructor(private formservice:FormserviceService) { }

  ngOnInit() {
    this.d =this.formservice.getUser();
    console.log(this.d);
    this.obj ={
     email :this.d.email,
    paswd:this.d.pwd,
    drop:this.d.drop
    }
}
}