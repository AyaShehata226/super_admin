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
  selectCustomer:Customers[]=[];
  pageSize:number =10;
  currentPage:number =1;
  totalPages: number=0;  // Total number of pages
  constructor(public customersSer:CustomersService){}
  
  ngOnInit(): void {
    this.loadCustomers();
  }
loadCustomers():void{
  this.customersSer.getAllCustomers().subscribe({
    next:(data)=>{
      this.customers=data;
      this.selectCustomer=data;
      this.updateDisplayCutomers();
      console.log(data);
    },
    error:(err)=>{
      console.log(err); 
    }
  })
}
searchCustomer(): void {
    if (this.customerEmail.trim()!=="") {
      this.selectCustomer = this.customers.filter(customer => customer.email === this.customerEmail.trim());
      console.log(this.selectCustomer);
    }else{
      this.loadCustomers();
    }
  }
  updateDisplayCutomers():void{
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.selectCustomer = this.customers.slice(startIndex, startIndex + this.pageSize);
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayCutomers();
    this.totalPages = Math.ceil(this.customers.length / this.pageSize);  
    console.log(this.totalPages);
  }
}
