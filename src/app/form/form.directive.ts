import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appForm]'
})
export class FormDirective implements OnInit{

  
// @HostBinding('style.backgroundColor')backgroundColor:string='transparent';
constructor(private renderer:Renderer2, private elRef:ElementRef) { }
// @HostListener('mouseenter')mouseOver(eventData:Event){
//  this.backgroundColor='green';
// }
// @HostListener('mouseenter')onLeave(eventData:Event){
//   this.backgroundColor='transparent';
// }

ngOnInit(){
  this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
}
}
