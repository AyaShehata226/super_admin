import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpclient:HttpClient) { }
  getAllCustomers():Observable<Customers[]>{
    return this.httpclient.get<Customers[]>(`${environment.BaseApiURL}/customer`)
  }

  getCustomerByEmail(email:string):Observable<Customers>{
    return this.httpclient.get<Customers>(`${environment.BaseApiURL}/customer/${email}`)
  }
}
