import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {take} from 'rxjs/operators'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productData$  //observabel
id:any;
  constructor(private productDataService:ProductServiceService ,private router:Router) {
  }
  ngOnInit(): void { //working here to load in when the compiler start
    this.productData$=this.productDataService.productData$
  }
  gotodetails(id){
    this.router.navigate([`/product/details`,id])
  }
}
