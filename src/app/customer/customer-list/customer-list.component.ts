import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerData$
  constructor(private customerservices:CustomerServiceService,private router:Router) { 
  }
  ngOnInit(): void {
    this.customerData$= this.customerservices.customerData$;
  }
  goToCustomerDetails(id){
    this.router.navigate(['customer/details',id])
  }

}
