import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './../customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerdata: any[];
  constructor(customerservices:CustomerServiceService) { 
    customerservices.getCustomerData().subscribe(
      res=>{
        console.log(res)
        this.customerdata=res;
      },
      err=>{
        console.log(err)

      }
    )
  }

  ngOnInit(): void {
  }

}
