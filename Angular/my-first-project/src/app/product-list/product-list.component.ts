import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:any = [
    {id:1,name:'Prod1',Description:'desc1',type:'Mobile'},
    {id:2,name:'Prod2',Description:'desc2',type:'Laptop'},
    {id:3,name:'Prod3',Description:'desc3',type:'Tablet'},
  ]
  condition:boolean=true;
  value:number=1
}
