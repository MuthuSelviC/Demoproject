import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormserviceService } from './formservice.service';
import { FormComponent } from './form/form.component';
import { FormDirective } from './form/form.directive';
const approutes : Routes= [
  {path:'', component:FormComponent},
{path:'display', component:DisplayComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    FormDirective,
    
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
