import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customerDetails
customerid:number
  constructor(private activatedrouter:ActivatedRoute,private customerServices:CustomerServiceService) { }

  ngOnInit(): void {
    this.customerid= +this.activatedrouter.snapshot.params['id']
   this.customerServices.customerData$.subscribe(res=>{
     this.customerDetails=res.find(customer=>customer.id=== this.customerid)
   })
  }

}
