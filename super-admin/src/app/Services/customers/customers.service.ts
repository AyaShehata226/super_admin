import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpclient:HttpClient) { }
  getAllCustomers():Observable<Customers>{
    return this.httpclient.get<Customers>(`${environment.BaseApiURL}/customer`).pipe(
      tap(res => {
        const customers = res.customers;
      })) 
  }

  getCustomerByEmail(email:string):Observable<Customers>{
    return this.httpclient.get<Customers>(`${environment.BaseApiURL}/customer/${email}`)
  }
  deleteCustomerId(customerId: number): Observable<void> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.delete<void>(`${environment.BaseApiURL}/customer/admin/${customerId}`);
  }
}
