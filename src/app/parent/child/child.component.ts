import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('product1')
  product:any

  @Output()
  discription: EventEmitter<string> = new EventEmitter()

 

  showDesc(desc:any){
    this.discription.emit(desc)
  }

  @Input('discount')
  discount:any

  // @Output()
  // eventDiscription: EventEmitter<string> = new EventEmitter

 
  // showDiscount(disc:any){
  //   this.eventDiscription.emit(disc)
  // }

 
    
}
