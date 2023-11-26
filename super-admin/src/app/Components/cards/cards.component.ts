import { NgxSpinnerService } from 'ngx-spinner';
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
  isLoading:boolean = false;
  constructor(private spinner: NgxSpinnerService,public customersSer:CustomersService ,public prdService:ProductsService ,public RetService:RetailersService){}
  
  ngOnInit(): void {
    this.isLoading = true;
    this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 5000);

    this.customersSer.getAllCustomers().subscribe({
      next:(data)=>{
        data.customers = [... new Set(data.customers)]
        this.customers.push(...data.customers);
        console.log(data);
        this.isLoading = false;
      },
      error:(err)=>{
        console.log(err); 
      }
    })

    this.prdService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.RetService.getAllRetailers().subscribe({
      next:(data)=>{
        this.Retailers=data;
        console.log(this.Retailers);
        this.isLoading = false;
      },
      error:(err)=>{
        console.log("error"); 
      }
    })
  }
  
}