import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerShowComponent } from './customer-show/customer-show.component';
import { CustomerServiceService } from './customer-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustomerDetailsComponent,
    CustomerListComponent,
    CustomerShowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    CustomerServiceService
  ]
})
export class CustomerModule { }
