import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  category!:string;
  products!:any[];
  constructor(private obj:DataService, private route:ActivatedRoute){}
  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      this.category=params['Type']
    })

    this.obj.getProducts(this.category).subscribe({
      next:data=>this.products =data,
      error:err=>console.log(err),
      complete:()=>console.log('Complete')
    })
  }
}
