import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormserviceService } from './formservice.service';
const approutes : Routes= [

]
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
