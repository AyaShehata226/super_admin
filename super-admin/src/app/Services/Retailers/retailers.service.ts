import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from 'src/app/Models/Retailers';
@Injectable({
  providedIn: 'root'
})
export class RetailersService {

  constructor(private httpclient:HttpClient) { }
  getAllRetailers():Observable<Retailer[]>{
    return this.httpclient.get<Retailer[]>(`${environment.BaseApiURL}/retailer`)
  }
}
