import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/Services/customers/customers.service';
import { Customers } from 'src/app/Models/customers';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/Models/IProducts';
import { RetailersService } from 'src/app/Services/Retailers/retailers.service';
import { Retailer } from 'src/app/Models/Retailers';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  customers:Customers[]=[];
  products:IProduct[]=[];
  Retailers:Retailer[]=[];

  constructor(public customersSer:CustomersService ,public prdService:ProductsService ,public RetService:RetailersService){}
  
  ngOnInit(): void {
    this.customersSer.getAllCustomers().subscribe({
      next:(data)=>{
        this.customers=data;
        console.log(data);
      },
      error:(err)=>{
        console.log(err); 
      }
    })

    this.prdService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.RetService.getAllRetailers().subscribe({
      next:(data)=>{
        this.Retailers=data;
        console.log(this.Retailers);
      },
      error:(err)=>{
        console.log("error"); 
      }
    })
  }
  
}