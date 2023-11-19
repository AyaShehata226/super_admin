import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { CustomersService } from 'src/app/Services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers:Customers[]=[];
  customerEmail:string="";
  constructor(public customersSer:CustomersService){}
  
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
  }

  searchCustomer(): void {
    // Check if productId is not empty
    if (this.customerEmail.trim()!=="") {
      this.customersSer.getCustomerByEmail(this.customerEmail).subscribe({
        next:(data)=>{
          // this.selectedProducts=data
          console.log(data);
          console.log(this.customerEmail);
        },
        error:(err)=>{
          console.log(err); 
        }
    });
    }
    // else{
    //   this.loadCustomer()
    // }
  }
  
}
