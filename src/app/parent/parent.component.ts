import { Component, ContentChildren, QueryList, AfterViewChecked,  ElementRef, ViewChildren, ContentChild, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewChecked{
  @ContentChildren('bCol') bCol: QueryList<ElementRef> | any
  @ContentChildren(ChildComponent) contentCildrenComp: QueryList<ChildComponent> | undefined

  @ViewChildren('p') p: QueryList<ElementRef> | any


  products = [ 
    {id: 1, name: 'product 1', price: 110, isShow:false, description: 'product1 text description', color: 'red'}, 
    {id: 2, name: 'product 2', price: 120, isShow:false, description: 'product2 text description', color: 'green'},
    {id: 3, name: 'product 3', price: 130, isShow:false, description: 'product3 text description', color: 'gold'}, 
  ]



  

  fHandler(value:number){
    this.products.forEach(product => {
      if(product.id === value){
        product.isShow = !product.isShow
      }
    })
  }

  discount: number = 0.15
  withDiscount:boolean = false

  countDisc(){
    this.withDiscount = !this.withDiscount
    console.log(this.contentCildrenComp);
    this.bCol.forEach((e: { nativeElement: { style: { color: string; }; }; }) => e.nativeElement.style.color = 'red')
    
    this.p.forEach((elem: { 
      nativeElement: { 
        style: { 
          color: string; 
        }; 
      }; 
    })=>elem.nativeElement.style.color = elem.nativeElement.style.color == 'red'? 'blue' : 'red')
    
  }

  ngAfterViewChecked(){
   
  }

}
