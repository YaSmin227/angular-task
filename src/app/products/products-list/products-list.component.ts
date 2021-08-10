import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productData:any []
  constructor(productdata:ProductServiceService ,private router:Router) { 
    productdata.getProductsData().subscribe(
      res=>{
        this.productData=res;
      },
      err=>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }
  gotodetails(){
    this.router.navigate([`/product/details`])
  }
}
