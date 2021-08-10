import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
@Input() productDetails:string
  constructor() { }

  ngOnInit(): void {
  }
 

}
