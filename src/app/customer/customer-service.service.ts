import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
 customerData$
  constructor(private http:HttpClient) { 
    this.customerData$=this.getCustomerData()
  }
  getCustomerData():Observable <any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
  }
}
